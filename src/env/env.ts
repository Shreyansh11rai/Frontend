type EnvConfig = {
  apiBaseUrl: string;
  apiTimeoutMs: number;
  mockMode: boolean;
  appName: string;
};

const rawApiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://mock-api.local";
const rawTimeout = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS ?? 6000);
const rawMockMode =
  (process.env.NEXT_PUBLIC_API_MODE ?? "mock").toLowerCase() === "mock";

export const env: EnvConfig = {
  apiBaseUrl: rawApiBaseUrl,
  apiTimeoutMs: Number.isFinite(rawTimeout) ? rawTimeout : 6000,
  mockMode: rawMockMode,
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? "DoomSphere",
};
