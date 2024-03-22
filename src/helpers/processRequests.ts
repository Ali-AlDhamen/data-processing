import { CustomError } from "../errors";
import { IRequest } from "../types";
import { requestSchema } from "./zodSchemas";

const processRequests = async (
  data: unknown[][] | Record<string, unknown>[]
) => {
  try {
    const requests: IRequest[] = [];
    for (const row of data) {
      const rowData = row as Record<string, unknown>;
      const req = {
        requestID: parseInt(rowData["RequestID"] as string),
        requestType: parseInt(rowData["RequestType"] as string),
        requestStatus: parseInt(rowData["RequestStatus"] as string),
        requestData: rowData["RequestData"] as string,
      }
      requestSchema.parse(req);
      requests.push(req);
    }
    return requests;
  } catch (error) {
    throw new CustomError("Invalid data for request.", 400);
  }
};

export default processRequests;
