# PCLessAiCreateWebApp

スマートフォンのみで開発することを前提とした、AI駆動（GitHub Copilot による PR 生成）に最適化された Next.js テンプレートリポジトリ。

## プロジェクト概要

- スマートフォン（GitHub Mobile + Copilot）から開発する
- 人間がコードを書くことを最小限にし、AI が生成・修正しやすい構造にする
- PR 駆動開発（Issue → PR → Review → Merge）を前提とする

## 技術スタック

| ツール | 用途 |
|---|---|
| Next.js (App Router) | フレームワーク |
| TypeScript | 型安全 |
| Tailwind CSS | スタイリング |
| Vercel | デプロイ |
| Route Handler | サーバーレス API |

## ディレクトリ構成

```
app/
  layout.tsx          # ルートレイアウト
  page.tsx            # トップページ
  api/
    health/
      route.ts        # GET /api/health → { status: "ok" }

features/
  example/
    components/       # UIコンポーネント（feature固有）
    hooks/            # カスタムフック
    logic.ts          # ビジネスロジック（API呼び出し等）

components/
  ui/
    button.tsx        # 汎用ボタン
    input.tsx         # 汎用入力フィールド

lib/
  utils.ts            # 共通ユーティリティ

types/
  index.ts            # 共通型定義

.env.example          # 環境変数のテンプレート
```

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 開発ルール

- **1PR = 1機能**: PR は単一の機能変更にとどめる
- **Issue を仕様書として使う**: 実装前に Issue で要件を明確にする
- **PR は小さく保つ**: レビューしやすい粒度に分割する
- **API キーはサーバー側のみ**: `NEXT_PUBLIC_` をシークレットに使わない
- **UIとロジックを分離**: ロジックは `logic.ts` にまとめ、コンポーネントはUIのみ担当する
- **複雑な抽象化を避ける**: シンプルさと一貫性を最優先にする
