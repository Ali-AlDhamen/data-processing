import { db } from "../database/db";
import * as schema from "../schemas/schema";

const requestTableHandler =  ({ params }: { params: Record<"requestTable", string> }) => {
    try {
      const tables = Object.keys(schema);
      let requestTable = params.requestTable as string;
      let found = false;
        tables.forEach((table) => {
            if (table.toLocaleLowerCase() === requestTable) {
            found = true;
            requestTable = table;
            }
        });
        if (!found) {
            return {
            status: 400,
            message: "Invalid request table",
            };
        }
        
        
      

      const requests = db.select().from(schema[requestTable as keyof typeof schema]).all();

      return {
        status: 200,
        data: requests,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal server error",
      };
    }
  }

export default requestTableHandler;