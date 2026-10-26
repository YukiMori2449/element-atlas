/**
 * Pure, bulk elemental solids near atmospheric pressure; reference: 298.15 K.
 * Room-temperature susceptibility signs are used only when no magnetic order
 * supersedes them (notably Cr). An empty transition list means unverified,
 * never that a transition cannot exist. Sources last checked 2026-10-26 JST.
 */
export type MagneticOrder =
  | 'ferromagnetic'
  | 'antiferromagnetic'
  | 'paramagnetic'
  | 'diamagnetic'
  | 'unknown';

export const magneticOrderLabels: Record<MagneticOrder, string> = {
  ferromagnetic: '強磁性',
  antiferromagnetic: '反強磁性',
  paramagnetic: '常磁性',
  diamagnetic: '反磁性',
  unknown: '不明',
};

export const magneticSources = {
  crc: {
    title: 'CRC Handbook of Chemistry and Physics, 84th ed. (2003–2004), pp. 4-130–4-135',
    url: 'https://fap.if.usp.br/~jhsevero/Fisica_Experimental_C_Semestral_2022/crc.pdf#page=812',
    detail: 'Magnetic Susceptibility of the Elements and Inorganic Compounds。特記がない値は285–300 Kの室温データ。元素の行と結晶相を確認し、符号から常磁性・反磁性を区分。磁気秩序が分かる元素は論文を優先。',
  },
  iron: {
    title: 'Ho, Powell & Liley, Thermal Conductivity of the Elements, J. Phys. Chem. Ref. Data 1 (1972)',
    url: 'https://srd.nist.gov/jpcrdreprint/1.3253100.pdf',
    detail: 'NIST公開の物性評価。鉄の図にCurie temp. 1043 Kと記載。',
  },
  cobalt: {
    title: 'Chatterjee et al., Phys. Rev. Applied 12, 044043 (2019)',
    url: 'https://doi.org/10.1103/PhysRevApplied.12.044043',
    detail: 'Reduced Thermal Variation of Perpendicular Magnetic Anisotropy…。純Coのキュリー温度1388 Kを記載。',
  },
  nickel: {
    title: 'Ledbetter & Reed, Elastic Properties of Metals and Alloys, I. Iron, Nickel, and Iron-Nickel Alloys (1973)',
    url: 'https://srd.nist.gov/JPCRD/jpcrd34.pdf',
    detail: 'NIST公開の物性評価、Section 9。Niのキュリー温度627 K。',
  },
  chromium: {
    title: 'Grier, Shirane & Werner, Magnetic excitations in chromium. II, Phys. Rev. B 31, 2892 (1985)',
    url: 'https://doi.org/10.1103/PhysRevB.31.2892',
    detail: '純Crの中性子散乱。ネール点312 K、スピンフリップ122 Kを報告。',
  },
  manganese: {
    title: 'Hobbs, Hafner & Spišák, Understanding the complex metallic element Mn. I, Phys. Rev. B 68, 014407 (2003)',
    url: 'https://doi.org/10.1103/PhysRevB.68.014407',
    detail: '常温α-Mnの常磁性と95 Kでの非共線反強磁性への転移を記載。',
  },
  gadolinium: {
    title: 'Burgardt & Seehra, Electron paramagnetic resonance in gadolinium near TC, Phys. Rev. B 16, 1802 (1977)',
    url: 'https://doi.org/10.1103/PhysRevB.16.1802',
    detail: 'Gd単結晶を280–330 Kで測定。キュリー温度は約293 K。',
  },
  gadoliniumPure: {
    title: 'Lyubina et al., Magnetic field dependence of the maximum magnetic entropy change, Phys. Rev. B 83, 012403 (2011)',
    url: 'https://doi.org/10.1103/PhysRevB.83.012403',
    detail: '純Gdのキュリー点295(1) Kを報告。純度・均一性による報告値の違いに注意。',
  },
  terbium: {
    title: 'Wazzan, Vitt & Robinson, Pressure Dependence of the Magnetic Transition Temperatures in Terbium from Resistance Measurements, Phys. Rev. 159, 400 (1967)',
    url: 'https://doi.org/10.1103/PhysRev.159.400',
    detail: '常圧での先行中性子回折結果として強磁性転移約220 K、ネール点約230 Kを記載。',
  },
  dysprosium: {
    title: 'Liu, Behrendt, Legvold & Good, Interpretation of Magnetic Properties of Dysprosium, Phys. Rev. 116, 1464 (1959)',
    url: 'https://doi.org/10.1103/PhysRev.116.1464',
    detail: '85 K未満で強磁性、85–179 Kで反強磁性、179 Kより上で常磁性。',
  },
  holmium: {
    title: 'Koehler et al., Magnetic Structures of Holmium. I. The Virgin State, Phys. Rev. 151, 414 (1966)',
    url: 'https://doi.org/10.1103/PhysRev.151.414',
    detail: '133 K未満でらせん秩序、約20 K未満で正味の磁化を持つ円錐構造。',
  },
  erbium: {
    title: 'Åström et al., Low-field AC susceptibility measurements on monocrystalline erbium, J. Phys.: Condens. Matter 2, 3349 (1990)',
    url: 'https://doi.org/10.1088/0953-8984/2/14/019',
    detail: '磁気異常85 K、52 K、34 K、28 K、19 Kを報告。',
  },
  thulium: {
    title: 'Ellerby, McEwen & Jensen, Magnetoresistance and magnetization study of thulium, Phys. Rev. B 57, 8416 (1998)',
    url: 'https://doi.org/10.1103/PhysRevB.57.8416',
    detail: '56 K以下で変調磁気秩序、約32 K以下で整合構造。低温の基底状態は4層対3層のフェリ磁性。',
  },
  europium: {
    title: 'Nereson, Olsen & Arnold, Magnetic Structure of Europium, Phys. Rev. 135, A176 (1964)',
    url: 'https://doi.org/10.1103/PhysRev.135.A176',
    detail: '金属Euの中性子回折。91 Kでらせん反強磁性へ転移。',
  },
  neodymium: {
    title: 'Arachchige et al., Nanometric modulations of the magnetic structure of the element Nd, Materials Today Quantum 4, 100016 (2024)',
    url: 'https://doi.org/10.1016/j.mtquan.2024.100016',
    detail: 'Ndの反強磁性秩序温度19.9 Kと、多段階の低温磁気構造を記載。',
  },
  samarium: {
    title: 'Bulatov & Dolzhenko, Low temperature phase transition in samarium, Sov. Phys. JETP 48, 1129 (1978)',
    url: 'https://www.jetp.ras.ru/cgi-bin/dn/e_048_06_1122.pdf',
    detail: 'α-Smの六方環境サイトは106 K、立方環境サイトは14–14.5 Kで反強磁性秩序を形成。',
  },
  cerium: {
    title: 'Goodrich & Everett, Electron Spin Resonance in Cerium Metal, Phys. Rev. 141, 541 (1966)',
    url: 'https://doi.org/10.1103/PhysRev.141.541',
    detail: '常圧・300 Kの立方相（γ相）などで電子常磁性共鳴を測定。',
  },
  ceriumBeta: {
    title: 'Burgardt et al., Electrical resistivity and magnetic susceptibility of β-cerium from 2 to 300 K, Phys. Rev. B 14, 2995 (1976)',
    url: 'https://doi.org/10.1103/PhysRevB.14.2995',
    detail: 'β-Ceのネール温度12.5 K。γ相の転移温度ではない。',
  },
  tin: {
    title: 'Measurements on the magnetic susceptibility of white tin and copper down to liquid helium temperatures, Physica 23, 169–172 (1957)',
    url: 'https://doi.org/10.1016/S0031-8914(57)91180-1',
    detail: '白色スズ多結晶は常磁性。室温から2 Kまでの磁化率変化と、銅の室温から20 Kまでのほぼ一定の磁化率を報告。',
  },
  tinStress: {
    title: 'Honda & Shimizu, Magnetism of Tin, Nature 135, 108 (1935)',
    url: 'https://doi.org/10.1038/135108a0',
    detail: '白色スズは冷間加工や内部応力で磁化率の符号が変わり得る。',
  },
} satisfies Record<string, { title: string; url: string; detail: string }>;

export type MagneticSourceId = keyof typeof magneticSources;
export interface MagneticTransition {
  kind: 'curie' | 'neel' | 'reorientation' | 'ordering';
  temperatureK: number;
  label: string;
  change: string;
  sourceIds: MagneticSourceId[];
  phase?: string;
}
export interface MagneticRecord {
  order: MagneticOrder;
  form: string;
  evidence: string;
  sourceIds: MagneticSourceId[];
  transitions: MagneticTransition[];
  temperatureBehavior: string | null;
}
type MagneticElement = { symbol: string; phase: string };
export const REFERENCE_TEMPERATURE_K = 298.15;
export const MAGNETISM_REVIEW_DATE = '2026-10-26';

// Every listed sign is from the elemental (not compound) row in CRC pp. 4-130–135.
// Cr is deliberately not assigned from the positive sign: it is an ordered AFM.
const roomTemperatureParamagnets = [
  'Li', 'Na', 'Mg', 'Al', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Mn', 'Rb', 'Sr',
  'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Cs', 'Ba', 'La', 'Pr',
  'Nd', 'Sm', 'Eu', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta',
  'W', 'Re', 'Os', 'Ir', 'Pt', 'Th', 'Pa', 'U', 'Np', 'Pu',
];
const roomTemperatureDiamagnets = [
  'Be', 'B', 'C', 'Si', 'P', 'S', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se',
  'Ag', 'Cd', 'In', 'Sb', 'Te', 'I', 'Au', 'Tl', 'Pb', 'Bi',
];

const phaseNames: Record<string, string> = {
  C: '黒鉛・ダイヤモンド（いずれも反磁性）',
  P: '白リン・赤リン（いずれも反磁性）',
  S: '斜方硫黄（α相）',
  Sc: 'α相', Ti: 'α相', Y: 'α相', Zr: 'α相', La: 'α相',
  Pr: 'α相', Nd: 'α相（dhcp）', Sm: 'α相', Dy: 'α相', Tb: 'α相',
  Yb: 'β相（fcc）', Hf: 'α相', Th: 'α相', U: 'α相',
};
const roomEvidence = '25℃付近の代表分類。出典の室温データは285–300 Kで、厳密な298.15 K測定値ではありません。';
const crcRecord = (order: MagneticOrder, symbol: string): MagneticRecord => ({
  order,
  form: phaseNames[symbol] ?? '常圧のバルク結晶（出典の代表相）',
  evidence: roomEvidence,
  sourceIds: ['crc'],
  transitions: [],
  temperatureBehavior: null,
});

export const magneticRecords: Record<string, MagneticRecord> = Object.fromEntries([
  ...roomTemperatureParamagnets.map(symbol => [symbol, crcRecord('paramagnetic', symbol)]),
  ...roomTemperatureDiamagnets.map(symbol => [symbol, crcRecord('diamagnetic', symbol)]),
]);

const transition = (
  kind: MagneticTransition['kind'], temperatureK: number, label: string,
  change: string, sourceIds: MagneticSourceId[], phase?: string,
): MagneticTransition => ({ kind, temperatureK, label, change, sourceIds, ...(phase ? { phase } : {}) });

Object.assign(magneticRecords, {
  Fe: {
    ...crcRecord('ferromagnetic', 'Fe'), form: 'α-Fe（体心立方晶）',
    sourceIds: ['crc', 'iron'],
    transitions: [transition('curie', 1043, 'キュリー温度 TC', '加熱すると強磁性 → 常磁性', ['iron'])],
    temperatureBehavior: '25℃では強磁性。約1043 Kを超えると自発磁化を失い、常磁性になります。',
  },
  Co: {
    ...crcRecord('ferromagnetic', 'Co'), form: '常温のhcp-Co（高温では結晶相が変化）',
    sourceIds: ['crc', 'cobalt'],
    transitions: [transition('curie', 1388, 'キュリー温度 TC', '加熱すると強磁性 → 常磁性', ['cobalt'])],
    temperatureBehavior: '25℃では強磁性。加熱時の結晶相変化を経ても強磁性は続き、約1388 Kで常磁性へ転移します。',
  },
  Ni: {
    ...crcRecord('ferromagnetic', 'Ni'), form: 'fcc-Ni（面心立方晶）',
    sourceIds: ['crc', 'nickel'],
    transitions: [transition('curie', 627, 'キュリー温度 TC', '加熱すると強磁性 → 常磁性', ['nickel'])],
    temperatureBehavior: '25℃では強磁性。約627 Kより高温では自発磁化を失い、常磁性になります。',
  },
  Cr: {
    ...crcRecord('antiferromagnetic', 'Cr'), form: 'bcc-Cr（スピン密度波）',
    evidence: '基準25℃（298.15 K）は、参照論文の122 Kと312 Kの間にあり、横波型の反強磁性スピン密度波が存在する温度域です。',
    sourceIds: ['chromium'],
    transitions: [
      transition('reorientation', 122, 'スピンフリップ転移', '加熱すると縦波型 → 横波型の反強磁性スピン密度波', ['chromium']),
      transition('neel', 312, 'ネール温度 TN', '加熱すると反強磁性 → 常磁性', ['chromium']),
    ],
    temperatureBehavior: '25℃はネール点より低いため反強磁性です。約122 Kでスピンの向きが変わり、約312 Kを超えると常磁性になります。',
  },
  Mn: {
    ...crcRecord('paramagnetic', 'Mn'), form: 'α-Mn（常温の安定相）',
    sourceIds: ['crc', 'manganese'],
    transitions: [transition('neel', 95, 'ネール温度 TN', '冷却すると常磁性 → 非共線反強磁性', ['manganese'])],
    temperatureBehavior: '25℃では常磁性。α相を冷却すると約95 Kで複雑な非共線反強磁性秩序が現れ、結晶格子も変形します。',
  },
  Gd: {
    ...crcRecord('paramagnetic', 'Gd'), form: 'hcp-Gd（純元素のバルク結晶）',
    evidence: '基準25℃（298.15 K）は、参照した実験のキュリー温度293 Kおよび295±1 Kより高温です。CRCの350 Kの値を25℃の測定値として扱っていません。',
    sourceIds: ['gadolinium', 'gadoliniumPure'],
    transitions: [transition('curie', 293, 'キュリー温度 TC（代表値）', '冷却すると常磁性 → 強磁性。純度等により約295 Kの報告もあります。', ['gadolinium', 'gadoliniumPure'])],
    temperatureBehavior: '25℃では常磁性。約293–295 K（約20–22℃）付近から低温側では強磁性になります。室温近くのため温度・純度に注意が必要です。',
  },
  Eu: {
    ...crcRecord('paramagnetic', 'Eu'), form: 'bcc-Eu（金属単体）',
    sourceIds: ['crc', 'europium'],
    transitions: [transition('neel', 91, 'ネール温度 TN', '冷却すると常磁性 → らせん反強磁性', ['europium'])],
    temperatureBehavior: '25℃では常磁性。約91 K未満で磁気モーメントがらせん状に並ぶ反強磁性になります。',
  },
  Nd: {
    ...crcRecord('paramagnetic', 'Nd'),
    sourceIds: ['crc', 'neodymium'],
    transitions: [transition('neel', 19.9, 'ネール温度 TN', '冷却すると常磁性 → 複雑な反強磁性秩序', ['neodymium'])],
    temperatureBehavior: '25℃では常磁性。約19.9 K以下で反強磁性秩序が現れ、その後も複数の磁気構造を経ます。低温の全相境界はここでは網羅していません。',
  },
  Sm: {
    ...crcRecord('paramagnetic', 'Sm'),
    sourceIds: ['crc', 'samarium'],
    transitions: [
      transition('ordering', 14.5, '立方環境サイトの秩序化', '冷却すると残るサイトにも反強磁性秩序が現れる（約14–14.5 K）', ['samarium']),
      transition('neel', 106, '六方環境サイトのネール温度', '冷却すると常磁性 → 部分的な反強磁性秩序', ['samarium']),
    ],
    temperatureBehavior: '25℃では常磁性。α-Smの異なる原子サイトが約106 Kと約14–14.5 Kで段階的に反強磁性秩序を形成します。',
  },
  Tb: {
    ...crcRecord('paramagnetic', 'Tb'), sourceIds: ['crc', 'terbium'],
    transitions: [
      transition('curie', 220, '強磁性転移温度（約）', '冷却するとらせん反強磁性 → 強磁性', ['terbium']),
      transition('neel', 230, 'ネール温度 TN（約）', '冷却すると常磁性 → らせん反強磁性', ['terbium']),
    ],
    temperatureBehavior: '25℃では常磁性。冷却すると約230 Kでらせん反強磁性、約220 Kで強磁性になります。転移温度には試料による差があります。',
  },
  Dy: {
    ...crcRecord('paramagnetic', 'Dy'), sourceIds: ['crc', 'dysprosium'],
    transitions: [
      transition('curie', 85, '強磁性転移温度（約）', '冷却すると反強磁性 → 強磁性', ['dysprosium']),
      transition('neel', 179, 'ネール温度 TN', '冷却すると常磁性 → らせん反強磁性', ['dysprosium']),
    ],
    temperatureBehavior: '25℃では常磁性。約85–179 Kではらせん反強磁性、約85 K未満では強磁性です。',
  },
  Ho: {
    ...crcRecord('paramagnetic', 'Ho'), form: 'hcp-Ho', sourceIds: ['crc', 'holmium'],
    transitions: [
      transition('ordering', 20, '円錐磁気構造への転移（約）', '冷却するとらせん構造に正味の強磁性成分が現れる', ['holmium']),
      transition('neel', 133, 'ネール温度 TN', '冷却すると常磁性 → らせん磁気秩序', ['holmium']),
    ],
    temperatureBehavior: '25℃では常磁性。133 K未満でらせん反強磁性秩序、約20 K未満では正味の磁化を持つ円錐構造になります。',
  },
  Er: {
    ...crcRecord('paramagnetic', 'Er'), form: 'hcp-Er', sourceIds: ['crc', 'erbium'],
    transitions: [
      transition('curie', 19, '強磁性転移温度（約）', '冷却すると正味の磁化を持つ円錐構造へ', ['erbium']),
      transition('reorientation', 28, '整合磁気構造の転移（約）', '磁気変調と結晶格子の周期関係が変化', ['erbium']),
      transition('reorientation', 34, '整合磁気構造の転移（約）', '磁気変調と結晶格子の周期関係が変化', ['erbium']),
      transition('ordering', 52, '底面内成分の秩序化（約）', '冷却すると底面内にもらせん状の磁気成分が現れる', ['erbium']),
      transition('neel', 85, 'ネール温度 TN', '冷却すると常磁性 → 変調反強磁性', ['erbium']),
    ],
    temperatureBehavior: '25℃では常磁性。約85 K以下で反強磁性となり、約52 Kで底面内の秩序が発達します。約19 K以下は円錐強磁性。途中にも複数の転移があります。',
  },
  Tm: {
    ...crcRecord('paramagnetic', 'Tm'), form: 'hcp-Tm', sourceIds: ['crc', 'thulium'],
    transitions: [
      transition('ordering', 32, '整合・フェリ磁性構造への転移（約）', '冷却すると4層対3層の変調構造が格子と整合', ['thulium']),
      transition('neel', 56, 'ネール温度 TN', '冷却すると常磁性 → 変調反強磁性秩序', ['thulium']),
    ],
    temperatureBehavior: '25℃では常磁性。約56 K以下で変調磁気秩序を形成し、約32 K以下では4層対3層のフェリ磁性構造になります。低温相は単純な強磁性とは区別します。',
  },
  Ce: {
    ...crcRecord('paramagnetic', 'Ce'), form: 'γ-Ce（常温の立方相）',
    evidence: '常温のγ相の常磁性は電子スピン共鳴実験で確認。低温β相の転移は別相のデータとして掲載しています。',
    sourceIds: ['cerium', 'ceriumBeta'],
    transitions: [transition('neel', 12.5, 'β相のネール温度 TN', 'β相を保った試料で常磁性 → 反強磁性。γ相には直接適用できません。', ['ceriumBeta'], 'β-Ce（基準のγ相とは別相）')],
    temperatureBehavior: '冷却時は結晶相の変化と履歴が影響します。β-Ceには12.5 Kの反強磁性転移が報告されていますが、常温γ相のままの転移としては扱いません。',
  },
  Sn: {
    ...crcRecord('paramagnetic', 'Sn'), form: '白色スズ（β-Sn、多結晶）',
    evidence: '25℃の通常相である白色スズの測定を採用。CRCの灰色スズの負の磁化率をβ相へ転用していません。',
    sourceIds: ['tin', 'tinStress', 'crc'],
    temperatureBehavior: '白色スズ多結晶では、室温から2 Kへの冷却で磁化率が約16%減少した測定報告があります。灰色のα相は反磁性。冷間加工・応力でも符号が変わることがあります。超伝導状態とは区別した報告です。',
  },
  Cu: {
    ...crcRecord('diamagnetic', 'Cu'), sourceIds: ['crc', 'tin'],
    temperatureBehavior: '参照した測定では室温から20 Kまで磁化率はほぼ一定です。さらに低温での増加は、試料中の微量Fe・Ni不純物に起因すると報告されています。',
  },
} satisfies Record<string, MagneticRecord>);

export type MagneticScope = 'solid' | 'not-solid' | 'unknown';
export function getMagneticScope(element: MagneticElement): MagneticScope {
  // The original element phase field is at 20 °C. Fr is uncertain at 25 °C;
  // do not silently carry its 20 °C solid label into the magnetic reference.
  if (element.symbol === 'Fr' || element.phase === '不明') return 'unknown';
  return element.phase === '固体' ? 'solid' : 'not-solid';
}

export function getMagnetism(element: MagneticElement): MagneticRecord {
  const scope = getMagneticScope(element);
  if (scope === 'solid' && magneticRecords[element.symbol]) return magneticRecords[element.symbol];
  return {
    order: 'unknown',
    form: scope === 'not-solid' ? '25℃・常圧では固体ではありません' : '不明',
    evidence: scope === 'not-solid'
      ? '固体としての磁性は不明。液体・気体の磁性を固体のデータとして転用していません。'
      : scope === 'unknown'
        ? '25℃での状態または固体の実測データを十分に確認できません。'
        : 'この元素の純粋な固体について、分類できる出典を確認できていません。',
    sourceIds: [],
    transitions: [],
    temperatureBehavior: null,
  };
}

export function formatMagneticTemperature(temperatureK: number): string {
  return `${temperatureK} K（${Number((temperatureK - 273.15).toFixed(2))} ℃）`;
}
