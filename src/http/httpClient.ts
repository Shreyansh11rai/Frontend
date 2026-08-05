import { env } from "@/env/env";
import type { ApiResponse } from "@/types/api";

class HttpClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HttpClientError";
  }
}

async function request<TResponse, TPayload extends object>(
  endpoint: string,
  payload: TPayload,
): Promise<ApiResponse<TResponse>> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(
    () => controller.abort(),
    env.apiTimeoutMs,
  );

  try {
    const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const data = (await response.json()) as ApiResponse<TResponse>;
    if (!response.ok || data.success === false) {
      throw new HttpClientError(data.message ?? "Request failed.");
    }

    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new HttpClientError("Request timed out.");
    }
    throw error instanceof HttpClientError
      ? error
      : new HttpClientError("Unexpected request error.");
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export const httpClient = {
  post: <TResponse, TPayload extends object>(
    endpoint: string,
    payload: TPayload,
  ) => request<TResponse, TPayload>(endpoint, payload),
};
