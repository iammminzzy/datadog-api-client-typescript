/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot1LinkType } from "./ServiceDefinitionV2Dot1LinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service's external links.
 */
export class ServiceDefinitionV2Dot1Link {
  /**
   * Link name.
   */
  "name": string;
  /**
   * Link provider.
   */
  "provider"?: string;
  /**
   * Link type.
   */
  "type": ServiceDefinitionV2Dot1LinkType;
  /**
   * Link URL.
   */
  "url": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ServiceDefinitionV2Dot1LinkType",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot1Link.attributeTypeMap;
  }

  public constructor() {}
}