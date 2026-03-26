# コーディングスキル（AIへの指示）

このファイルはGitHub Copilotへのシステムプロンプト代わりとして使用するスキル定義です。  
このリポジトリでコードを生成・修正する際は、以下のルールを必ず守ってください。

---

## 📝 日本語での関数単位コメント

- すべての関数・メソッドには日本語でコメントを記述する
- コメントは「何をするか」を1行で明記する
- 複雑な処理には処理の流れをステップごとに日本語コメントで記載する

### 例

```ts
/**
 * ユーザーIDをもとにAPIからユーザー情報を取得する
 */
async function fetchUser(userId: string): Promise<User> {
  // APIエンドポイントにGETリクエストを送信する
  const res = await fetch(`/api/users/${userId}`);

  // レスポンスが正常でない場合はエラーをスローする
  if (!res.ok) throw new Error("ユーザー取得に失敗しました");

  // JSONとしてパースして返す
  return res.json();
}
```

---

## 📄 md同期

- コードの追加・変更を行った場合は、関連するMarkdownドキュメント（README.mdなど）を同期して更新する
- 新しいAPIエンドポイントやディレクトリ構成を追加した場合は `README.md` のディレクトリ構成・仕様セクションを更新する
- 変更内容が外部仕様に影響する場合は、必ずドキュメントに反映する

### 同期対象の例

| 変更内容 | 更新すべきドキュメント |
|---|---|
| 新APIエンドポイント追加 | README.md のAPI仕様セクション |
| 新しいディレクトリ作成 | README.md のディレクトリ構成セクション |
| 環境変数の追加 | `.env.example` と README.md |

---

## 🧪 test強制化

- 新しい関数・ロジックを追加した場合は、必ず対応するテストを作成する
- テストファイルは対象ファイルと同じディレクトリに `*.test.ts` の形式で配置する
- 既存のテストを削除・変更してはならない
- テストは以下の観点でカバーする：
  - 正常系（期待通りの入力と出力）
  - 異常系（エラーや不正な入力への対応）

### テストファイルの配置例

```
features/
  example/
    logic.ts
    logic.test.ts   ← logic.tsに対応するテスト
```

### テストの例

```ts
import { describe, it, expect } from "vitest";
import { someFunction } from "./logic";

describe("someFunction", () => {
  it("正常な入力に対して期待した値を返す", () => {
    expect(someFunction("input")).toBe("expected output");
  });

  it("空文字を渡した場合にエラーをスローする", () => {
    expect(() => someFunction("")).toThrow();
  });
});
```
