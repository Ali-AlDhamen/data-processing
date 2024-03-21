import parse from "csv-simple-parser";
import {
  AccountRequest,
  AddNewActivity,
  IRequest,
  InspectionRequest,
  NewLicense,
  StampLicenseLetter,
} from "../types";
import * as schema from "../schemas/schema";
import { db } from "../database/db";
import processRequests from "../helpers/processRequests";
import {
  processTables,
  transformAccountRequest,
  transformNewLicense,
  transformInspectionRequest,
  transformStampLicenseLetter,
  transformAddNewActivity,
} from "../helpers";

const uploadFileHandler = async (req: Request) => {
  try {
    const startTime = Date.now();
    
    // @ts-ignore
    if (!req.body || !req.body.file) {
      throw new Error("No file uploaded");
    }
    
    // @ts-ignore
    const file = req.body.file;

    const data = parse(await file.text(), {
      header: true,
      delimiter: ",",
    });

    const requests = await processRequests(data);
    const newLicenses = processTables(requests, 1, transformNewLicense);
    const accountRequests = processTables(requests, 2, transformAccountRequest);
    const inspectionRequests = processTables(
      requests,
      3,
      transformInspectionRequest
    );
    const addNewActivities = processTables(
      requests,
      4,
      transformAddNewActivity
    );
    const stampLicenseLetters = processTables(
      requests,
      5,
      transformStampLicenseLetter
    );

    // insert data to database
    await db.insert(schema.request).values(requests).execute();
    await db.insert(schema.newLicense).values(newLicenses).execute();
    await db.insert(schema.accountRequest).values(accountRequests).execute();
    await db
      .insert(schema.inspectionRequest)
      .values(inspectionRequests)
      .execute();
    await db.insert(schema.addNewActivity).values(addNewActivities).execute();
    await db
      .insert(schema.stampLicenseLetter)
      .values(stampLicenseLetters)
      .execute();

    const endTime = Date.now();
    return {
      status: 200,
      message: "Data uploaded successfully",
      timeTaken: endTime - startTime + "ms",
      data: {
        Requests: {
          amount: requests.length,
        },
        NewLicense: {
          amount: newLicenses.length,
        },
        AccountRequest: {
          amount: accountRequests.length,
        },
        InspectionRequest: {
          amount: inspectionRequests.length,
        },
        AddNewActivity: {
          amount: addNewActivities.length,
        },
        StampLicenseLetter: {
          amount: stampLicenseLetters.length,
        },
      },
    };
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

export default uploadFileHandler;
