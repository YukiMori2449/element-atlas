import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  formatMagneticTemperature,
  getMagneticScope,
  getMagnetism,
  magneticOrderLabels,
  magneticRecords,
  magneticSources,
  REFERENCE_TEMPERATURE_K,
} from '../data/magnetism.ts';

const elements = JSON.parse(readFileSync(new URL('../data/elements.json', import.meta.url)));
const bySymbol = Object.fromEntries(elements.map(element => [element.symbol, element]));
const data = symbol => getMagnetism(bySymbol[symbol]);
const orders = new Set(Object.keys(magneticOrderLabels));
const allSymbols = new Set(elements.map(element => element.symbol));
let classified = 0;
let transitions = 0;

for (const symbol of Object.keys(magneticRecords)) {
  assert.ok(allSymbols.has(symbol), `Unknown element key ${symbol}`);
  assert.equal(getMagneticScope(bySymbol[symbol]), 'solid', `${symbol} must be solid at reference T`);
}

for (const element of elements) {
  const record = getMagnetism(element);
  assert.ok(orders.has(record.order), element.symbol);
  assert.ok(record.form && record.evidence, `${element.symbol}: missing conditions`);
  if (record.order !== 'unknown') {
    classified++;
    assert.ok(record.sourceIds.length, `${element.symbol}: uncited classification`);
  } else {
    assert.equal(record.temperatureBehavior, null, `${element.symbol}: inferred behavior without evidence`);
    assert.equal(record.transitions.length, 0, `${element.symbol}: unsupported transition`);
  }
  for (const id of record.sourceIds) assert.ok(magneticSources[id], `${element.symbol}: missing source ${id}`);
  for (const event of record.transitions) {
    transitions++;
    assert.ok(Number.isFinite(event.temperatureK) && event.temperatureK > 0);
    assert.ok(event.change && event.label && event.sourceIds.length);
    for (const id of event.sourceIds) assert.ok(magneticSources[id], `${element.symbol}: missing event source ${id}`);
    assert.ok(formatMagneticTemperature(event.temperatureK).includes('℃'));
  }
}

// Scientific regressions: common room-temperature/low-temperature confusions.
assert.equal(REFERENCE_TEMPERATURE_K, 298.15);
for (const symbol of ['Fe', 'Co', 'Ni']) assert.equal(data(symbol).order, 'ferromagnetic');
assert.equal(data('Fe').transitions[0].temperatureK, 1043);
assert.equal(data('Ni').transitions[0].temperatureK, 627);
assert.equal(data('Co').transitions[0].temperatureK, 1388);
assert.equal(data('Cr').order, 'antiferromagnetic', 'Cr is NOT paramagnetic despite positive susceptibility');
assert.ok(data('Cr').transitions.some(event => event.kind === 'neel' && event.temperatureK > REFERENCE_TEMPERATURE_K));
assert.equal(data('Mn').order, 'paramagnetic', 'Alpha Mn orders only at low T');
assert.equal(data('Gd').order, 'paramagnetic', 'Gd is NOT ferromagnetic at 25 Celsius');
assert.ok(data('Gd').transitions[0].temperatureK < REFERENCE_TEMPERATURE_K);
for (const symbol of ['Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Eu', 'Nd', 'Sm']) {
  assert.equal(data(symbol).order, 'paramagnetic', `${symbol}: must distinguish low T order`);
  assert.ok(data(symbol).transitions.every(event => event.temperatureK < REFERENCE_TEMPERATURE_K));
}
assert.equal(data('Sn').order, 'paramagnetic', 'White tin must not inherit gray tin diamagnetism');
assert.match(data('Sn').form, /β-Sn/);
assert.match(data('Ce').form, /γ-Ce/);
assert.match(data('Ce').transitions[0].phase, /β-Ce/, 'Ce low T transition is a different allotrope');
assert.match(data('Tm').transitions.find(event => event.temperatureK === 32).label, /フェリ磁性/);
for (const symbol of ['Cu', 'Au', 'Bi', 'C']) assert.equal(data(symbol).order, 'diamagnetic');
for (const symbol of ['Pm', 'Po', 'At', 'Fr', 'Am', 'Og']) assert.equal(data(symbol).order, 'unknown');
for (const symbol of ['O', 'Br', 'Hg']) {
  assert.equal(getMagneticScope(bySymbol[symbol]), 'not-solid');
  assert.equal(data(symbol).order, 'unknown', 'Must not use liquid/gas values for solids');
}
assert.equal(getMagneticScope(bySymbol.Fr), 'unknown', '20 Celsius phase must not leak into 25 Celsius');
assert.equal(formatMagneticTemperature(1043), '1043 K（769.85 ℃）');
assert.equal(formatMagneticTemperature(95), '95 K（-178.15 ℃）');
for (const source of Object.values(magneticSources)) {
  assert.equal(new URL(source.url).protocol, 'https:');
  assert.ok(source.title && source.detail);
}
console.log(`Verified all 118 elements: ${classified} source-backed classifications, ${118 - classified} unknown/not-solid records, ${transitions} cited transitions.`);
