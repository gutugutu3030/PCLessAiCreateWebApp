"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHealthCheck } from "@/features/example/hooks/useHealthCheck";

export function ExampleFeature() {
  const [inputValue, setInputValue] = useState("");
  const { result, status, error, check } = useHealthCheck();

  return (
    <section className="max-w-md space-y-4">
      <h2 className="text-lg font-semibold">Health Check Example</h2>

      <Input
        type="text"
        placeholder="任意のテキストを入力..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button onClick={check} disabled={status === "loading"}>
        {status === "loading" ? "確認中..." : "/api/health を呼び出す"}
      </Button>

      {status === "success" && result && (
        <div className="p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-sm font-medium text-green-800">レスポンス:</p>
          <pre className="text-sm text-green-700 mt-1">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {status === "error" && error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </section>
  );
}
