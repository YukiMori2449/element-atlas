import {
  formatMagneticTemperature,
  getMagneticScope,
  getMagnetism,
  magneticOrderLabels,
  magneticSources,
  MAGNETISM_REVIEW_DATE,
  REFERENCE_TEMPERATURE_K,
  type MagneticSourceId,
} from '../../data/magnetism';

export default function Magnetism({
  element,
}: {
  element: { symbol: string; name: string; phase: string };
}) {
  const data = getMagnetism(element);
  const scope = getMagneticScope(element);
  const sourceIds = [...new Set([
    ...data.sourceIds,
    ...data.transitions.flatMap(event => event.sourceIds),
  ])] as MagneticSourceId[];

  return (
    <section className="magnetism" aria-label={`${element.name}の固体の磁性`}>
      <div className="magnetism-heading">
        <h3>固体の磁性</h3>
        <span className={`magnetic-badge magnetic-${data.order}`}>
          {magneticOrderLabels[data.order]}
        </span>
      </div>
      <dl className="magnetic-facts">
        <div>
          <dt>判定の基準温度</dt>
          <dd>25 ℃ <small>（{REFERENCE_TEMPERATURE_K} K）</small></dd>
        </div>
        <div>
          <dt>圧力・試料</dt>
          <dd>常圧・純元素のバルク</dd>
        </div>
        <div className="magnetic-form">
          <dt>対象の状態・結晶相</dt>
          <dd>{data.form}</dd>
        </div>
      </dl>
      <p className="magnetic-evidence">{data.evidence}</p>
      {scope === 'not-solid' && (
        <p className="magnetic-evidence">この基準温度での固体比較の対象外です。</p>
      )}

      <h4>確認できる磁気転移温度</h4>
      {data.transitions.length ? (
        <ol className="magnetic-transitions">
          {data.transitions.map((event, index) => (
            <li key={`${event.kind}-${event.temperatureK}`}>
              <span className="transition-step" aria-hidden="true">{index + 1}</span>
              <div>
                <strong>{event.label}</strong>
                <span className="transition-temperature">
                  約 {formatMagneticTemperature(event.temperatureK)}
                </span>
                {event.phase && <span className="transition-phase">対象：{event.phase}</span>}
                <p>{event.change}</p>
                <div className="transition-citations">
                  {event.sourceIds.map(id => (
                    <a key={id} href={magneticSources[id].url} target="_blank" rel="noreferrer">
                      出典 [{sourceIds.indexOf(id) + 1}] ↗
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="magnetic-unknown">
          <strong>不明</strong>
          <span>転移温度を確認できていません。「転移しない」という意味ではありません。</span>
        </p>
      )}

      <h4>温度による変化</h4>
      <p className="magnetic-behavior">
        {data.temperatureBehavior ?? '不明。温度に対する具体的な変化を、この元素・結晶相の出典で確認できていません。'}
      </p>

      <details className="magnetic-references">
        <summary>磁性の出典・判定条件{sourceIds.length > 0 ? `（${sourceIds.length}件）` : ''}</summary>
        {sourceIds.length ? (
          <ol>
            {sourceIds.map((id, index) => (
              <li key={id}>
                <a href={magneticSources[id].url} target="_blank" rel="noreferrer">
                  [{index + 1}] {magneticSources[id].title} ↗
                </a>
                <p>{magneticSources[id].detail}</p>
              </li>
            ))}
          </ol>
        ) : <p>この元素の固体磁性を裏付ける出典は未確認です。</p>}
        <p>25℃での分類と、別の温度・結晶相での秩序を区別しています。磁場・純度・応力・結晶方位によって実験値は変わります。</p>
        <p>TCは強磁性に関する転移、TNは反強磁性秩序が失われる転移の温度です。超伝導転移や構造転移は別の現象で、ここでは網羅していません。</p>
        <p>出典確認日：{MAGNETISM_REVIEW_DATE}</p>
      </details>
      <details className="magnetic-glossary">
        <summary>4つの磁性の違い</summary>
        <dl>
          <div><dt>強磁性</dt><dd>磁気モーメントがそろい、自発磁化を持ちます。</dd></div>
          <div><dt>反強磁性</dt><dd>磁気モーメントが反対向きなどの秩序をつくり、全体の磁化が打ち消し合います。</dd></div>
          <div><dt>常磁性</dt><dd>外部の磁場に弱く引かれ、通常は磁場を除くと磁化が消えます。</dd></div>
          <div><dt>反磁性</dt><dd>磁場と反対向きの磁化が誘起され、弱く反発します。</dd></div>
        </dl>
      </details>
    </section>
  );
}
