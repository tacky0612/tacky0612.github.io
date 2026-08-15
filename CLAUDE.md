# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

`tacky0612` の個人ポートフォリオサイト。React 19 + TypeScript + Vite で構築し、GitHub Pages に自動デプロイされる単一ページの静的サイト。

## コマンド

```bash
npm run dev            # Vite (5173) と Storybook (6006) を同時起動
npm run dev:app        # アプリのみ (Vite)
npm run storybook      # Storybook のみ (6006)

npm run build          # アプリ + Storybook を dist/ にビルド（デプロイと同じ）
npm run build:app      # アプリのみ

npm run lint           # ESLint（--fix は lint:fix）
npm run typecheck      # tsc --noEmit（型チェックはここでのみ実行）
npm run format         # Prettier で src/ を整形（format:check で確認のみ）
npm run test           # Vitest（1回実行）。test:watch は監視モード
npm run coverage       # Vitest + カバレッジ（coverage/ に出力）
npm run preview        # ビルド成果物のプレビュー
```

テストは **Vitest + Testing Library**（jsdom 環境）。テストは対象と同じ階層に `Xxx.test.tsx` として置く。セットアップは `src/test/setup.ts`（jest-dom マッチャー登録・`cleanup`・`vitest-axe` マッチャー登録）。アクセシビリティ検証は `vitest-axe` の `axe()` + `toHaveNoViolations()` を `*.a11y.test.tsx` で行う。UI の見た目確認は Storybook。

## CI / デプロイ

- **PR validation** (`pr-validation.yml`): `main` への PR で lint / typecheck / build（Node 20・22）、Vitest カバレッジ、Prettier 整形チェック、`src/` の `console.*` 検出を実行。**整形崩れと `console.*` は CI を失敗させる**（`npm audit` のみ情報提供扱い）。
- **CodeQL** (`codeql.yml`): push / PR / 週次で JS/TS の静的セキュリティ解析。
- **Lighthouse CI** (`lighthouse.yml` + `lighthouserc.json`): PR で `build:app` の `dist/` を監査。accessibility / SEO は 0.9 未満で失敗、performance / best-practices は警告。
- **Deploy** (`deploy.yml`): `main` push で `npm run build` → `dist/` を GitHub Pages へ公開。
- Dependabot: `.github/dependabot.yml` で npm / github-actions を週次更新。patch / minor は `dependabot-auto-merge.yml` で自動マージ。

## アーキテクチャ

エントリは `src/main.tsx` → `App.tsx`（`Layout` で `HomePage` を包む）。ルーターは持たない単一ページ構成で、セクション間移動は `Header` のアンカー + スムーズスクロール（`element.scrollIntoView` / `window.scrollTo`）で行う。`HomePage` が `Profile` / `Skills` / `Links` セクションを縦に並べる。

コンポーネントは 3 層に分離され、それぞれ `ComponentName/ComponentName.tsx` と `ComponentName.stories.tsx` をペアで持つ:

- `src/components/ui/` — 汎用プリミティブ（`Button`, `Card`, `Section`, `ExternalLink` など）。variant / size を props でオブジェクトマップ（`variantStyles` 等）から引く方式。
- `src/components/sections/` — ページの各セクション（`Profile`, `Skills`, `Links`）。表示するプロフィール・スキル・リンクの実データはこれらのファイル内にハードコードされている。内容変更はここを編集する。
- `src/components/layout/` — `Header`, `Footer`, `Layout`。

新規コンポーネント追加時は同じ `Xxx/Xxx.tsx` + `Xxx/Xxx.stories.tsx` の構成に従う（Storybook は `src/**/*.stories.tsx` を自動収集）。

## 規約・注意点

- **スタイリングは Tailwind のユーティリティクラスのみ**。className を組み立てる際はテンプレートリテラルで結合する（`Button.tsx` 参照）。カスタムテーマ拡張は未使用。
- **ESLint は `typescript-eslint` 経由で `.js` / `.jsx` / `.ts` / `.tsx` を検査**する。型レベルの検証は別途 `npm run typecheck`（`tsc --noEmit`）で行う。
- TypeScript は `strict` かつ `noUnusedLocals` / `noUnusedParameters` 有効。未使用の import / 変数はビルドを通さない。
- Vite の `base: './'`（相対パス）で GitHub Pages に対応。`public/` の静的アセットは `/images/...` のように絶対パスで参照する。
- 開発時、Vite は `/storybook` を 6006 の Storybook にプロキシする（`vite.config.js`）。
