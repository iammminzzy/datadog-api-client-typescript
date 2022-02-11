import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params: v2.DashboardListsApiDeleteDashboardListItemsRequest = {
  // number | ID of the dashboard list to delete items from.
  dashboardListId: 1,
  // DashboardListDeleteItemsRequest | Dashboards to delete from the dashboard list.
  body: {
    dashboards: [
      {
        id: "q5j-nti-fv6",
        type: "host_timeboard",
      },
    ],
  },
};

apiInstance
  .deleteDashboardListItems(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));