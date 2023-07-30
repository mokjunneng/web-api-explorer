import { components } from "../api/generated/apisguru";

// Create custom interface to include OpenAPI's Info Object schema https://swagger.io/specification/#oas-document:~:text=Specification%20Extensions.-,Info%20Object,-The%20object%20provides
// However, only include key properties that we will be using
export type ServiceProviderAPIVersionDetails = Omit<components["schemas"]["ApiVersion"], "info"> & {
  info: {
    title: string;
    description?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    }
    ["x-logo"]?: {
      url: string;
    }
  }
}

// Since we are only querying for v2 APIs, create a new interface for fixed version service details
export interface ServiceProviderDetails {
  apis: {
    [api: string]: ServiceProviderAPIVersionDetails;
  }
}
