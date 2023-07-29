export interface ProviderDetails {
  added: string;
  info: ProviderDetailInfo;
  updated: string;
  swaggerUrl: string;
  swaggerYamlUrl: string;
  openapiVer: string;
  link: string;
}

export interface ProviderDetailInfo {
  contact: {
    email: string;
    name: string;
    url: string;
    "x-twitter": string;
  };
  description: string;
  title: string;
  version: string;
  "x-apisguru-categories": string[];
  "x-logo": {
    url: string;
  };
  "x-origin": XOrigin[];
  "x-providerName": string;
  "x-serviceName": string;
  "x-unofficialSpec": boolean;
}

export interface XOrigin {
  format: string;
  url: string;
  version: string;
}
