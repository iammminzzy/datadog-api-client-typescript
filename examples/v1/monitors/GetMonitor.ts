/**
 * Get a monitor's details returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "monitor" in the system
let MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

let params: v1.MonitorsApiGetMonitorRequest = {
  monitorId: MONITOR_ID,
};

apiInstance
  .getMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));