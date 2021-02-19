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
* Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
*/
export class LogsExclusionFilter {
    /**
    * Default query is `*`, meaning all logs flowing in the index would be excluded. Scope down exclusion filter to only a subset of logs with a log query.
    */
    'query'?: string;
    /**
    * Sample rate to apply to logs going through this exclusion filter, a value of 1 will exclude all logs matching the query.
    */
    'sampleRate': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "sampleRate",
            "baseName": "sample_rate",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LogsExclusionFilter.attributeTypeMap;
    }
    
    public constructor() {
    }
}
