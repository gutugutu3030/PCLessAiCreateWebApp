import { describe, it, expect } from "vitest";
import { GET } from "./route";

/** /api/health エンドポイントのテスト */
describe("GET /api/health", () => {
  it("ステータス200とJSON { status: 'ok' } を返す", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body).toEqual({ status: "ok" });
  });

  it("Content-Type が application/json である", async () => {
    const response = await GET();
    expect(response.headers.get("content-type")).toContain("application/json");
  });
});
