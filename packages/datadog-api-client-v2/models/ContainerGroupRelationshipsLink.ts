/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerGroupRelationshipsLinks } from "./ContainerGroupRelationshipsLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships to Containers inside a Container Group.
 */
export class ContainerGroupRelationshipsLink {
  /**
   * Links data.
   */
  "data"?: Array<string>;
  /**
   * Links attributes.
   */
  "links"?: ContainerGroupRelationshipsLinks;

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
      type: "Array<string>",
    },
    links: {
      baseName: "links",
      type: "ContainerGroupRelationshipsLinks",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerGroupRelationshipsLink.attributeTypeMap;
  }

  public constructor() {}
}