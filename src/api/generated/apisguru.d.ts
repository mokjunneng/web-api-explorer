/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/providers.json': {
    /**
     * List all providers
     * @description List all the providers in the directory
     */
    get: operations['getProviders'];
  };
  '/{provider}.json': {
    /**
     * List all APIs for a particular provider
     * @description List all APIs in the directory for a particular providerName
     * Returns links to the individual API entry for each API.
     */
    get: operations['getProvider'];
  };
  '/{provider}/services.json': {
    /**
     * List all serviceNames for a particular provider
     * @description List all serviceNames in the directory for a particular providerName
     */
    get: operations['getServices'];
  };
  '/specs/{provider}/{api}.json': {
    /**
     * Retrieve one version of a particular API
     * @description Returns the API entry for one specific version of an API where there is no serviceName.
     */
    get: operations['getAPI'];
  };
  '/specs/{provider}/{service}/{api}.json': {
    /**
     * Retrieve one version of a particular API with a serviceName.
     * @description Returns the API entry for one specific version of an API where there is a serviceName.
     */
    get: operations['getServiceAPI'];
  };
  '/list.json': {
    /**
     * List all APIs
     * @description List all APIs in the directory.
     * Returns links to the OpenAPI definitions for each API in the directory.
     * If API exist in multiple versions `preferred` one is explicitly marked.
     * Some basic info from the OpenAPI definition is cached inside each object.
     * This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.
     */
    get: operations['listAPIs'];
  };
  '/metrics.json': {
    /**
     * Get basic metrics
     * @description Some basic metrics for the entire directory.
     * Just stunning numbers to put on a front page and are intended purely for WoW effect :)
     */
    get: operations['getMetrics'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * @description List of API details.
     * It is a JSON object with API IDs(`<provider>[:<service>]`) as keys.
     *
     * @example {
     *   "googleapis.com:drive": {
     *     "added": "2015-02-22T20:00:45.000Z",
     *     "preferred": "v3",
     *     "versions": {
     *       "v2": {
     *         "added": "2015-02-22T20:00:45.000Z",
     *         "info": {
     *           "title": "Drive",
     *           "version": "v2",
     *           "x-apiClientRegistration": {
     *             "url": "https://console.developers.google.com"
     *           },
     *           "x-logo": {
     *             "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
     *           },
     *           "x-origin": {
     *             "format": "google",
     *             "url": "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
     *             "version": "v1"
     *           },
     *           "x-preferred": false,
     *           "x-providerName": "googleapis.com",
     *           "x-serviceName": "drive"
     *         },
     *         "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json",
     *         "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.yaml",
     *         "updated": "2016-06-17T00:21:44.000Z"
     *       },
     *       "v3": {
     *         "added": "2015-12-12T00:25:13.000Z",
     *         "info": {
     *           "title": "Drive",
     *           "version": "v3",
     *           "x-apiClientRegistration": {
     *             "url": "https://console.developers.google.com"
     *           },
     *           "x-logo": {
     *             "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
     *           },
     *           "x-origin": {
     *             "format": "google",
     *             "url": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
     *             "version": "v1"
     *           },
     *           "x-preferred": true,
     *           "x-providerName": "googleapis.com",
     *           "x-serviceName": "drive"
     *         },
     *         "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json",
     *         "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.yaml",
     *         "updated": "2016-06-17T00:21:44.000Z"
     *       }
     *     }
     *   }
     * }
     */
    APIs: {
      [key: string]: components['schemas']['API'] | undefined;
    };
    /** @description Meta information about API */
    API: {
      info: any;
      /**
       * Format: date-time
       * @description Timestamp when the API was first added to the directory
       */
      added: string;
      /** @description Recommended version */
      preferred: string;
      /** @description List of supported versions of the API */
      versions: {
        [key: string]: components['schemas']['ApiVersion'] | undefined;
      };
    };
    ApiVersion: {
      /**
       * Format: date-time
       * @description Timestamp when the version was added
       */
      added: string;
      /**
       * Format: date-time
       * @description Timestamp when the version was updated
       */
      updated: string;
      /**
       * Format: url
       * @description URL to OpenAPI definition in JSON format
       */
      swaggerUrl: string;
      /**
       * Format: url
       * @description URL to OpenAPI definition in YAML format
       */
      swaggerYamlUrl: string;
      /**
       * Format: url
       * @description Link to the individual API entry for this API
       */
      link?: string;
      /** @description Copy of `info` section from OpenAPI definition */
      info: Record<string, never>;
      /** @description Copy of `externalDocs` section from OpenAPI definition */
      externalDocs?: Record<string, never>;
      /** @description The value of the `openapi` or `swagger` property of the source definition */
      openapiVer: string;
    };
    /**
     * @description List of basic metrics
     * @example {
     *   "numAPIs": 2501,
     *   "numEndpoints": 106448,
     *   "numSpecs": 3329,
     *   "unreachable": 123,
     *   "invalid": 598,
     *   "unofficial": 25,
     *   "fixes": 81119,
     *   "fixedPct": 22,
     *   "datasets": [],
     *   "stars": 2429,
     *   "issues": 28,
     *   "thisWeek": {
     *     "added": 45,
     *     "updated": 171
     *   },
     *   "numDrivers": 10,
     *   "numProviders": 659
     * }
     */
    Metrics: {
      /** @description Number of API definitions including different versions of the same API */
      numSpecs: number;
      /** @description Number of unique APIs */
      numAPIs: number;
      /** @description Total number of endpoints inside all definitions */
      numEndpoints: number;
      /** @description Number of unreachable (4XX,5XX status) APIs */
      unreachable?: number;
      /** @description Number of newly invalid APIs */
      invalid?: number;
      /** @description Number of unofficial APIs */
      unofficial?: number;
      /** @description Total number of fixes applied across all APIs */
      fixes?: number;
      /** @description Percentage of all APIs where auto fixes have been applied */
      fixedPct?: number;
      /** @description Data used for charting etc */
      datasets?: unknown[];
      /** @description GitHub stars for our main repo */
      stars?: number;
      /** @description Open GitHub issues on our main repo */
      issues?: number;
      /** @description Summary totals for the last 7 days */
      thisWeek?: {
        /** @description APIs added in the last week */
        added?: number;
        /** @description APIs updated in the last week */
        updated?: number;
      };
      /** @description Number of methods of API retrieval */
      numDrivers?: number;
      /** @description Number of API providers in directory */
      numProviders?: number;
    };
  };
  responses: never;
  parameters: {
    provider: string;
    api: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  /**
   * List all providers
   * @description List all the providers in the directory
   */
  getProviders: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': {
            data?: string[];
          };
        };
      };
    };
  };
  /**
   * List all APIs for a particular provider
   * @description List all APIs in the directory for a particular providerName
   * Returns links to the individual API entry for each API.
   */
  getProvider: {
    parameters: {
      path: {
        provider: components['parameters']['provider'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['APIs'];
        };
      };
    };
  };
  /**
   * List all serviceNames for a particular provider
   * @description List all serviceNames in the directory for a particular providerName
   */
  getServices: {
    parameters: {
      path: {
        provider: components['parameters']['provider'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': {
            data?: string[];
          };
        };
      };
    };
  };
  /**
   * Retrieve one version of a particular API
   * @description Returns the API entry for one specific version of an API where there is no serviceName.
   */
  getAPI: {
    parameters: {
      path: {
        provider: components['parameters']['provider'];
        api: components['parameters']['api'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['API'];
        };
      };
    };
  };
  /**
   * Retrieve one version of a particular API with a serviceName.
   * @description Returns the API entry for one specific version of an API where there is a serviceName.
   */
  getServiceAPI: {
    parameters: {
      path: {
        provider: components['parameters']['provider'];
        service: string;
        api: components['parameters']['api'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['API'];
        };
      };
    };
  };
  /**
   * List all APIs
   * @description List all APIs in the directory.
   * Returns links to the OpenAPI definitions for each API in the directory.
   * If API exist in multiple versions `preferred` one is explicitly marked.
   * Some basic info from the OpenAPI definition is cached inside each object.
   * This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.
   */
  listAPIs: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['APIs'];
        };
      };
    };
  };
  /**
   * Get basic metrics
   * @description Some basic metrics for the entire directory.
   * Just stunning numbers to put on a front page and are intended purely for WoW effect :)
   */
  getMetrics: {
    responses: {
      /** @description OK */
      200: {
        content: {
          'application/json': components['schemas']['Metrics'];
        };
      };
    };
  };
}
