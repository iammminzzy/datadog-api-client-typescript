/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPSTSServiceAccountUpdateRequestData } from "./GCPSTSServiceAccountUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service account info.
 */
export class GCPSTSServiceAccountUpdateRequest {
  /**
   * Data on your service account.
   */
  "data"?: GCPSTSServiceAccountUpdateRequestData;

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
      type: "GCPSTSServiceAccountUpdateRequestData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPSTSServiceAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}