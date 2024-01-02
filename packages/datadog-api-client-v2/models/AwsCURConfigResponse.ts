/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfig } from "./AwsCURConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response of AWS CUR config.
 */
export class AwsCURConfigResponse {
  /**
   * AWS CUR config.
   */
  "data"?: AwsCURConfig;

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
      type: "AwsCURConfig",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
