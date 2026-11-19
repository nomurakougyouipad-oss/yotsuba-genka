# 原価かんたん計算（yotsuba-genka）

工事ごとに「売上・原価・何%残ったか」を出すウェブアプリ。

- 画面：`index.html` 1枚（スマホは1列、パソコンは左に原価・右に結果）
- データ：Firebase Firestore（コレクション `koji`、1工事＝1ドキュメント）
- ログイン：Firebase の匿名ログイン（アプリを開いた人が自動でログイン）
- ホスティング：GitHub Pages
- Firebase JS SDK 12.19.0（CDN、社用車管理アプリと同じ版）

## 工事のデータの形（koji/{id}）

| 項目 | 中身 |
|---|---|
| name | 工事名（100文字まで） |
| memo | メモ・注番など（200文字まで） |
| sales | 売上（円） |
| cost | 原価の合計（円、一覧用に保存） |
| rows | 原価の行：`{ n: 項目名, p: 単価, q: 数, u: 単位 }` の並び（300行まで） |
| createdAt / updatedAt | 作った時・直した時（ミリ秒） |

## はじめて公開するとき

1. Firebase コンソールでプロジェクト `yotsuba-genka` を作る
2. Firestore Database を作る（場所：asia-northeast1 東京）
3. Authentication →「匿名」を有効にする
4. プロジェクトの設定 → マイアプリ → ウェブアプリを追加し、出た値を `firebase-config.js` に貼る
5. `firestore.rules` を公開する（`firebase deploy --only firestore:rules`、またはコンソールのルール画面に貼って公開）
6. GitHub に `yotsuba-genka` リポジトリを作って全部のファイルを入れ、Settings → Pages で main ブランチを公開

`firebase-config.js` の apiKey が空のあいだは、Firebase につながずに端末の中だけで動く（試し用）。

## 決まりごと

- テストモードのルールのまま公開しない
- 残り%の色：30%以上 緑／10〜30% 黄／10%未満 赤（`level()` で変えられる）
- よく使う項目と初めの単価は `index.html` の `PRESETS` で変えられる
