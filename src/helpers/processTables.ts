import { IRequest } from "../types";
type RequestType = 1 | 2 | 3 | 4 | 5;

const processTables =  (requests: IRequest[], requestType:RequestType, transform: CallableFunction)  => {
    return requests
      .filter(request => request.requestType === requestType)
      .map(request => {
        const data = JSON.parse(request.requestData);
        return transform(request, data) ;
      });
  }
  

export default processTables;