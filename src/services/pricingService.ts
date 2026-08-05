import { env } from "@/env/env";
import { createMockResponse } from "@/data/mock-api";
import { httpClient } from "@/http/httpClient";
import type {
  ApiResponse,
  PricingInterestPayload,
  RequestEnvelope,
  SubmissionResponse,
} from "@/types/api";

export async function createPricingRequest(
  payload: PricingInterestPayload,
): Promise<ApiResponse<SubmissionResponse>> {
  if (env.mockMode) {
    return createMockResponse(`pricing-${payload.serviceId}`);
  }

  const envelope: RequestEnvelope<PricingInterestPayload> = {
    source: "pricing-card",
    timestamp: new Date().toISOString(),
    payload,
  };

  return httpClient.post<
    SubmissionResponse,
    RequestEnvelope<PricingInterestPayload>
  >("/pricing-interests", envelope);
}
