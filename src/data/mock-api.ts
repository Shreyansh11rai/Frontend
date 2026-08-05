import type { ApiResponse, SubmissionResponse } from "@/types/api";

export function createMockResponse(
  reference: string,
): ApiResponse<SubmissionResponse> {
  return {
    success: true,
    message: "Request accepted by the mock enquiry pipeline.",
    data: {
      id: `mock-${reference}`,
      status: "accepted",
      reference,
    },
  };
}
