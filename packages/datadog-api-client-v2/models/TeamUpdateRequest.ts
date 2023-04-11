/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamUpdate } from "./TeamUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team update request
 */
export class TeamUpdateRequest {
  /**
   * Team update request
   */
  "data": TeamUpdate;

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
      type: "TeamUpdate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}