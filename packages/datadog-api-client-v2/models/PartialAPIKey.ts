/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyRelationships } from './APIKeyRelationships';
import { APIKeysType } from './APIKeysType';
import { PartialAPIKeyAttributes } from './PartialAPIKeyAttributes';
import { HttpFile } from '../http/http';

/**
* Partial Datadog API key.
*/
export class PartialAPIKey {
    'attributes'?: PartialAPIKeyAttributes;
    /**
    * ID of the API key.
    */
    'id'?: string;
    'relationships'?: APIKeyRelationships;
    'type'?: APIKeysType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PartialAPIKeyAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "APIKeyRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "APIKeysType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PartialAPIKey.attributeTypeMap;
    }
    
    public constructor() {
    }
}
