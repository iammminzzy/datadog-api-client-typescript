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

import { FormulaAndFunctionEventAggregation } from './FormulaAndFunctionEventAggregation';
import { HttpFile } from '../http/http';

/**
* Compute options.
*/
export class TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute {
    'aggregation': FormulaAndFunctionEventAggregation;
    /**
    * A time interval in milliseconds.
    */
    'interval'?: number;
    /**
    * Measurable attribute to compute.
    */
    'metric'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "FormulaAndFunctionEventAggregation",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesFormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
    }
    
    public constructor() {
    }
}
