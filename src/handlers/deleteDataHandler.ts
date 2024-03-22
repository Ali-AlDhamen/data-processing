import { db } from "../database/db";
import { handleError } from "../errors";
import * as schema from "../schemas/schema";

const deleteDataHandler = async (req: Request) => {
  try {
    await db.delete(schema.request).execute();
    await db.delete(schema.newLicense).execute();
    await db.delete(schema.accountRequest).execute();
    await db.delete(schema.inspectionRequest).execute();
    await db.delete(schema.addNewActivity).execute();
    await db.delete(schema.stampLicenseLetter).execute();

    const responseJson = JSON.stringify({
      status: 200,
      message: "Data deleted successfully",
    });
    
    return new Response(responseJson, {status: 200});
  } catch (error) {
    return handleError(error);
  }
};

export default deleteDataHandler;
