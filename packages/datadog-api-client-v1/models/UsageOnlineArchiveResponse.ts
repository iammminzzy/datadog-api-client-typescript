/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageOnlineArchiveHour } from "./UsageOnlineArchiveHour";

import { AttributeTypeMap } from "../util";

/**
 * Online Archive usage response.
 */
export class UsageOnlineArchiveResponse {
  /**
   * Response containing Online Archive usage.
   */
  "usage"?: Array<UsageOnlineArchiveHour>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<UsageOnlineArchiveHour>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageOnlineArchiveResponse.attributeTypeMap;
  }

  public constructor() {}
}