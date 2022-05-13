/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Global query options that are used during the query. Note: Only supply timezone or time offset, not both. Otherwise, the query fails.
 */
export class RUMQueryOptions {
  /**
   * The time offset (in seconds) to apply to the query.
   */
  "timeOffset"?: number;
  /**
   * The timezone can be specified both as an offset, for example: "UTC+03:00".
   */
  "timezone"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    timeOffset: {
      baseName: "time_offset",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMQueryOptions.attributeTypeMap;
  }

  public constructor() {}
}