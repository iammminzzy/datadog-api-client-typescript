/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListStreamSource } from "./ListStreamSource";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Updated list stream widget.
 */

export class ListStreamQuery {
  "dataSource": ListStreamSource;
  /**
   * List of indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Widget query.
   */
  "queryString": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    dataSource: {
      baseName: "data_source",
      type: "ListStreamSource",
      format: "",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
      format: "",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ListStreamQuery.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ListStreamQuery {
    const res = new ListStreamQuery();

    if (data.data_source === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'ListStreamQuery' object"
      );
    }
    if (["issue_stream", "logs_stream", undefined].includes(data.data_source)) {
      res.dataSource = data.data_source;
    } else {
      throw TypeError(`invalid enum value ${data.data_source} for data_source`);
    }

    res.indexes = ObjectSerializer.deserialize(
      data.indexes,
      "Array<string>",
      ""
    );

    if (data.query_string === undefined) {
      throw new TypeError(
        "missing required attribute 'query_string' on 'ListStreamQuery' object"
      );
    }
    res.queryString = ObjectSerializer.deserialize(
      data.query_string,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: ListStreamQuery): { [key: string]: any } {
    const attributeTypes = ListStreamQuery.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.dataSource === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'ListStreamQuery' object"
      );
    }
    if (["issue_stream", "logs_stream", undefined].includes(data.dataSource)) {
      res.data_source = data.dataSource;
    } else {
      throw TypeError(`invalid enum value ${data.dataSource} for dataSource`);
    }

    res.indexes = ObjectSerializer.serialize(data.indexes, "Array<string>", "");

    if (data.queryString === undefined) {
      throw new TypeError(
        "missing required attribute 'query_string' on 'ListStreamQuery' object"
      );
    }
    res.query_string = ObjectSerializer.serialize(
      data.queryString,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
