/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActiveBillingDimensionsBody } from "./ActiveBillingDimensionsBody";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Active billing dimensions response.
 */
export class ActiveBillingDimensionsResponse {
  /**
   * Active billing dimensions data.
   */
  "data"?: ActiveBillingDimensionsBody;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ActiveBillingDimensionsBody",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ActiveBillingDimensionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
