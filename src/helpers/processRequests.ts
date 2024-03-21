import { IRequest } from "../types";

const processRequests = async ( data: unknown[][] | Record<string, unknown>[]) => {
  const requests: IRequest[] = [];
  for (const row of data) {
    const rowData = row as Record<string, unknown>;
    requests.push({
      requestID: parseInt(rowData["RequestID"] as string),
      requestType: parseInt(rowData["RequestType"] as string),
      requestStatus: parseInt(rowData["RequestStatus"] as string),
      requestData: rowData["RequestData"] as string,
    });
  }

    return requests;
};


export default processRequests;