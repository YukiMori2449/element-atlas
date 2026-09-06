# ELEMENT ATLAS

日本語で118元素を学べる周期表。ホバー・タップ・キーボード操作、検索、分類フィルター、写真・電子殻模式図、電子配置と物性データを備えています。

## 開発

Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 で構成しています。

Node.js 22以降で次を実行します。

```bash
npm ci
npm run dev
npm run build
```

VercelではFramework Presetを `Next.js`、Root Directoryをリポジトリ直下に設定します。ビルドコマンドと出力先はVercelの自動設定を使用し、環境変数は不要です。

## データ

- `data/elements.json`: 表示用データ。日本語説明は本サイト用に編集。
- 物性・電子配置: Royal Society of Chemistry の元素別ページ（各レコードの source）。取得日: 2026-09-07 JST。
- 元素の配置・画像情報: Bowserinator/Periodic-Table-JSON、CC BY-SA 3.0。日本語化・加工データも CC BY-SA 3.0。
- 写真は各レコードの attribution に著作者とライセンスを記載。Chemical Elements — A Virtual Museum の写真は各元素ページへリンクする CC BY 3.0。
- 密度の単位は g/cm³。RSCの室温付近の値。温度・圧力・同素体によって変わります。
- 原子番号85、87、100以降の未確立の密度・融点・沸点は予測値を表示せず「不明」。RSCでUnknownとされた値も「不明」。炭素・ヒ素は常圧での昇華を注記。
- 超重元素の電子配置は予測であることを表示。実物写真のない元素は電子殻の模式図を表示します。模式図は縮尺・量子力学的な軌道を表すものではありません。
- 電子殻の個数はRSCの電子配置から集計。

## 操作

PC: カーソルを合わせる、またはTabで詳細を選択。スマホ: 元素をタップで詳細ダイアログ。閉じるボタン・背景・Escapeで閉じる。横にスクロールして18族すべてを表示。
