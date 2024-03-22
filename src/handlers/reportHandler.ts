import { db } from "../database/db";
import { handleError } from "../errors";
import * as schema from "../schemas/schema";


const reportHandler = async (req: Request) => {
    try {
      
      const newLicenseData = await db.select().from(schema.newLicense).all();
      const accountRequestData = await db.select().from(schema.accountRequest).all();
      const inspectionRequestData = await db.select().from(schema.inspectionRequest).all();
      const addNewActivityData = await db.select().from(schema.addNewActivity).all();
      const stampLicenseLetterData = await db.select().from(schema.stampLicenseLetter).all();

      const responseJson = JSON.stringify({
        status: 200,
        data: {
          NewLicense: {
            amount: newLicenseData.length,
            data: newLicenseData,
          },
          AccountRequest: {
            amount: accountRequestData.length,
            data: accountRequestData,
          },
          InspectionRequest: {
            amount: inspectionRequestData.length,
            data: inspectionRequestData,
          },
          AddNewActivity: {
            amount: addNewActivityData.length,
            data: addNewActivityData,
          },
          StampLicenseLetter: {
            amount: stampLicenseLetterData.length,
            data: stampLicenseLetterData,
          },
        },
      });
      return new Response(responseJson, {status: 200})
    } catch (error) {
      return handleError(error);
    }
  }


export default reportHandler;