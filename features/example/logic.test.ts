import { describe, it, expect, vi } from "vitest";
import { fetchHealth } from "./logic";

/** fetchHealth 関数のテスト */
describe("fetchHealth", () => {
  it("正常なレスポンスの場合、HealthResponse を返す", async () => {
    const mockResponse = { status: "ok" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchHealth();
    expect(result).toEqual({ status: "ok" });
    expect(global.fetch).toHaveBeenCalledWith("/api/health");
  });

  it("レスポンスが失敗の場合、エラーをスローする", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchHealth()).rejects.toThrow("Health check failed: 500");
  });
});
