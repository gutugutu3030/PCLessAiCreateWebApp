# PCLessAiCreateWebApp

スマートフォンのみで開発することを前提とした、AI駆動（GitHub Copilot による PR 生成）に最適化された Next.js テンプレートリポジトリ。
**Vercel（無料枠）** をデプロイ・実行環境として使用する。

## プロジェクト概要

- スマートフォン（GitHub Mobile + Copilot）から開発する
- 人間がコードを書くことを最小限にし、AI が生成・修正しやすい構造にする
- PR 駆動開発（Issue → PR → Review → Merge）を前提とする
- **Vercel と GitHub を連携** し、`main` ブランチへの push で自動デプロイする

## 技術スタック

| ツール | 用途 |
|---|---|
| Next.js (App Router) | フレームワーク |
| TypeScript | 型安全 |
| Tailwind CSS | スタイリング |
| Vitest | テスト |
| Vercel | デプロイ・ホスティング・環境変数管理 |
| Route Handler | サーバーレス API |

## ディレクトリ構成

```
app/
  layout.tsx          # ルートレイアウト
  page.tsx            # トップページ
  api/
    health/
      route.ts        # GET /api/health → { status: "ok" }
      route.test.ts   # API テスト

features/
  example/
    components/       # UIコンポーネント（feature固有）
    hooks/            # カスタムフック
    logic.ts          # ビジネスロジック（API呼び出し等）
    logic.test.ts     # ロジックテスト

components/
  ui/
    button.tsx        # 汎用ボタン
    input.tsx         # 汎用入力フィールド

lib/
  utils.ts            # 共通ユーティリティ

types/
  index.ts            # 共通型定義

vercel.json           # Vercel デプロイ設定
.env.example          # 環境変数のテンプレート
```

## Vercel 連携手順

このリポジトリを Vercel にデプロイするための手順。スマートフォンのブラウザだけで完了できる。

### 1. Vercel アカウント作成

1. ブラウザで [vercel.com](https://vercel.com) にアクセスする
2. **「Sign Up」** をタップする
3. **「Continue with GitHub」** を選択し、GitHub アカウントでログインする

### 2. プロジェクトのインポート

1. Vercel ダッシュボードで **「Add New…」→「Project」** をタップする
2. **「Import Git Repository」** から、このリポジトリ（`PCLessAiCreateWebApp`）を選択する
3. Framework Preset が **「Next.js」** になっていることを確認する
4. **「Deploy」** をタップする

### 3. 環境変数の設定

API キーなどの秘密情報は Vercel の環境変数として設定する。

1. Vercel ダッシュボードでプロジェクトを開く
2. **「Settings」→「Environment Variables」** に移動する
3. `.env.example` を参考に、必要な変数を追加する

| 変数名 | 説明 | 設定場所 |
|---|---|---|
| `NEXT_PUBLIC_APP_NAME` | アプリ表示名 | Vercel 環境変数 |
| その他 API キー等 | 外部サービスのキー | Vercel 環境変数（`NEXT_PUBLIC_` を付けない） |

> **注意**: `NEXT_PUBLIC_` で始まる変数はクライアントに公開される。秘密情報には `NEXT_PUBLIC_` を付けず、サーバー側（Route Handler）からのみアクセスすること。

### 4. 自動デプロイの確認

GitHub 連携が完了すると、以下の自動デプロイが有効になる:

- **本番デプロイ**: `main` ブランチに push すると自動デプロイされる
- **プレビューデプロイ**: PR を作成すると、PR ごとに独立した URL でプレビューが確認できる

PR 駆動開発との相性が良く、スマートフォンからのレビュー時にプレビュー URL で動作確認ができる。

## ローカルセットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

## スクリプト一覧

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run start` | プロダクションサーバー起動 |
| `npm run lint` | ESLint 実行 |
| `npm test` | テスト実行（Vitest） |

## 開発ルール

- **1PR = 1機能**: PR は単一の機能変更にとどめる
- **Issue を仕様書として使う**: 実装前に Issue で要件を明確にする
- **PR は小さく保つ**: レビューしやすい粒度に分割する
- **API キーはサーバー側のみ**: `NEXT_PUBLIC_` をシークレットに使わない。秘密情報は Vercel の環境変数に設定し、Route Handler 経由でアクセスする
- **UIとロジックを分離**: ロジックは `logic.ts` にまとめ、コンポーネントはUIのみ担当する
- **複雑な抽象化を避ける**: シンプルさと一貫性を最優先にする
- **テストを書く**: 新しい関数には `*.test.ts` ファイルを作成する
