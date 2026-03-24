"use client";

import { useState } from "react";
import { fetchHealth } from "@/features/example/logic";
import type { HealthResponse } from "@/types";

type Status = "idle" | "loading" | "success" | "error";

interface UseHealthCheckResult {
  result: HealthResponse | null;
  status: Status;
  error: string | null;
  check: () => Promise<void>;
}

export function useHealthCheck(): UseHealthCheckResult {
  const [result, setResult] = useState<HealthResponse | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const check = async () => {
    setStatus("loading");
    setError(null);
    try {
      const data = await fetchHealth();
      setResult(data);
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  return { result, status, error, check };
}
