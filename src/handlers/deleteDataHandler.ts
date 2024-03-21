import { db } from "../database/db";
import * as schema from "../schemas/schema";

const deleteDataHandler = async (req: Request) => {
  try {
    await db.delete(schema.request).execute();
    await db.delete(schema.newLicense).execute();
    await db.delete(schema.accountRequest).execute();
    await db.delete(schema.inspectionRequest).execute();
    await db.delete(schema.addNewActivity).execute();
    await db.delete(schema.stampLicenseLetter).execute();

    return {
      status: 200,
      message: "Data deleted successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export default deleteDataHandler;
