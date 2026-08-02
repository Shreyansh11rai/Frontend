import { SERVICES_DATA, type ServiceData } from "@/data/services_data";

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
