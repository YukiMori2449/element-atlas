import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const elements=JSON.parse(readFileSync(new URL('../data/elements.json',import.meta.url)));
assert.equal(elements.length,118);
assert.equal(new Set(elements.map(e=>`${e.x},${e.y}`)).size,118);
for(const [i,e] of elements.entries()){
 assert.equal(e.number,i+1);
 assert.equal(e.shells.reduce((a,b)=>a+b,0),e.number,`${e.symbol}: electron total`);
 assert.ok(e.name&&e.summary&&e.configuration);
 if(e.image)assert.ok(existsSync(new URL(`../public${e.image}`,import.meta.url)),e.image);
 if(e.number>=104)assert.equal(e.configurationPredicted,true);
}
assert.equal(elements[0].density,'0.000082');
assert.equal(elements[1].melt,null);
assert.equal(elements[5].melt,'該当なし（昇華）');
assert.equal(elements[14].melt,'44.15 °C');
assert.equal(elements[117].density,'不明');
assert.equal(elements[117].boil,null);
console.log('Verified 118 elements, unique positions, electron totals, image assets, and representative scientific edge cases.');
