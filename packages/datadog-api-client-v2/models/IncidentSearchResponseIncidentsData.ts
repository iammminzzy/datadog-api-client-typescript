/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseData } from "./IncidentResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident returned by the search.
 */
export class IncidentSearchResponseIncidentsData {
  /**
   * Incident data from a response.
   */
  "data": IncidentResponseData;

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
      type: "IncidentResponseData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponseIncidentsData.attributeTypeMap;
  }

  public constructor() {}
}