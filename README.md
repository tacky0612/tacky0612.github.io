# tacky0612.github.io

個人ポートフォリオサイトのソースコードです。

## 技術スタック

### フロントエンド
- **React** (v19.1.1) - UIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - 高速なビルドツール
- **React Router** (v7.8.0) - ルーティング
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク

### 開発ツール
- **Storybook** - コンポーネント開発環境
- **ESLint** - コード品質管理
- **PostCSS** / **Autoprefixer** - CSS処理

## セットアップ

### 前提条件
- Node.js (v18以上推奨)
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/tacky0612/tacky0612.github.io.git
cd tacky0612.github.io

# 依存関係のインストール
npm install
```

## 開発

### 開発サーバーの起動

```bash
# Viteの開発サーバーとStorybookを同時に起動
npm run dev
```

- アプリケーション: http://localhost:5173
- Storybook: http://localhost:6006

### 個別起動

```bash
# アプリケーションのみ
npm run dev:app

# Storybookのみ
npm run storybook
```

## ビルド

```bash
# プロダクションビルド（アプリケーションとStorybook）
npm run build

# アプリケーションのみビルド
npm run build:app

# Storybookのみビルド
npm run build:storybook
```

ビルド成果物は `dist/` ディレクトリに出力されます。

## その他のコマンド

```bash
# ESLintの実行
npm run lint

# プロダクションビルドのプレビュー
npm run preview
```

## デプロイ

GitHub Pagesへの自動デプロイが設定されています。`main`ブランチへのプッシュで自動的にビルド・デプロイされます。
