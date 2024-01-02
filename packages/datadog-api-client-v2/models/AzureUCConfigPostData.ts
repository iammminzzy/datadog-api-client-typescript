/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureUCConfigPostRequestAttributes } from "./AzureUCConfigPostRequestAttributes";
import { AzureUCConfigPostRequestType } from "./AzureUCConfigPostRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Azure config Post data.
 */
export class AzureUCConfigPostData {
  /**
   * Attributes for Azure config Post Request.
   */
  "attributes": AzureUCConfigPostRequestAttributes;
  /**
   * Type of Azure config Post Request.
   */
  "type": AzureUCConfigPostRequestType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "AzureUCConfigPostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPostRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPostData.attributeTypeMap;
  }

  public constructor() {}
}
