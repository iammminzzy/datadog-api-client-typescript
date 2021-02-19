/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Number of indexed logs for each hour and index for a given organization.
*/
export class UsageLogsByIndexHour {
    /**
    * The total number of indexed logs for the queried hour.
    */
    'eventCount'?: number;
    /**
    * The hour for the usage.
    */
    'hour'?: Date;
    /**
    * The index ID for this usage.
    */
    'indexId'?: string;
    /**
    * The user specified name for this index ID.
    */
    'indexName'?: string;
    /**
    * The retention period (in days) for this index ID.
    */
    'retention'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventCount",
            "baseName": "event_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hour",
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "indexId",
            "baseName": "index_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "indexName",
            "baseName": "index_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "retention",
            "baseName": "retention",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsageLogsByIndexHour.attributeTypeMap;
    }
    
    public constructor() {
    }
}
