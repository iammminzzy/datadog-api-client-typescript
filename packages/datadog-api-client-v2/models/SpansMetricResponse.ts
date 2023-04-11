/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricResponseData } from "./SpansMetricResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The span-based metric object.
 */
export class SpansMetricResponse {
  /**
   * The span-based metric properties.
   */
  "data"?: SpansMetricResponseData;

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
      type: "SpansMetricResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}