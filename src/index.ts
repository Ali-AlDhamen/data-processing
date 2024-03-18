import { Elysia , t } from "elysia";
import { db } from "./database/db";
import * as schema from "./schemas/schema";
import { swagger } from '@elysiajs/swagger'
import parse from "csv-simple-parser";
import { AccountRequest, AddNewActivity, InspectionRequest, NewLicense, StampLicenseLetter } from "./types";

const app = new Elysia().use(swagger());
app.post("/api/v1/upload", t.File(), async (req: Request) => {
  return "File uploaded";
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

interface Request {
  requestID: number;
  requestType: number;
  requestStatus: number;
  requestData: string;
}

console.time("total");
const requests: Request[] = [];
const file = Bun.file("data.csv");
const data = parse(await file.text(), {
  header: true,
  delimiter: ",",
});
for (const row of data) {
  const rowData = row as Record<string, unknown>;
  requests.push({
    // int parse
    requestID: parseInt(rowData["RequestID"] as string),
    requestType: parseInt(rowData["RequestType"] as string),
    requestStatus: parseInt(rowData["RequestStatus"] as string),
    requestData: rowData["RequestData"] as string,
  });
}


// for (const request of requests) {
//   if (request.requestType === 1) {
//     const newLicense = schema.newLicense;
//     const data = JSON.parse(request.requestData) as NewLicense;
//     await db.insert(newLicense).values([
//       {
//         id: request.requestID,
//         companyName: data.CompanyName,
//         licenseType: data.LicenceType,
//         isOffice: data.IsOffice.toString(),
//         officeName: data.OfficeName,
//         officeServiceNumber: data.OfficeServiceNumber,
//         requestDate: data.RequestDate,
//         activities: data.Activities
//       },
//     ]);
//   }
//   if (request.requestType === 2) {
//     const accountRequest = schema.accountRequest;
//     const data = JSON.parse(request.requestData) as AccountRequest;
//     await db.insert(accountRequest).values([
//       {
//         id: request.requestID,
//         companyName: data.CompanyName,
//         requesterName: data.RequesterName,
//         applicantName: data.ApplicantName,
//         userName: data.UserName,
//         contactEmail: data.ContactEmail,
//         permissions:  data.Permissions.toString(),
//       },
//     ]);
 
//   }
//   if (request.requestType === 3) {
//     const inspectionRequest = schema.inspectionRequest;
//     const data = JSON.parse(request.requestData) as InspectionRequest;
//     await db.insert(inspectionRequest).values([
//       {
//         id: request.requestID,
//         companyName: data.CompanyName,
//         inspectionDate: data.InspectionDate,
//         inspectionTime: data.InspectionTime,
//         inspectionType: data.InspectionType,
//       },
//     ]);
  
//   }
//   if (request.requestType === 4) {
//     const addNewActivity = schema.addNewActivity;
//     const data = JSON.parse(request.requestData) as AddNewActivity;
//     console.log(data.LicenceID);
//     await db.insert(addNewActivity).values([
//       {
//         id: request.requestID,
//         companyName: data.CompanyName,
//         licenseID: data.LicenceID,
//         activities: data.Activities.toString(),
//       }
//     ]);
   
//   }
//   if (request.requestType === 5) {
//     const stampLicenseLetter = schema.stampLicenseLetter;
//     const data = JSON.parse(request.requestData) as StampLicenseLetter;
//     await db.insert(stampLicenseLetter).values([
//       {
//         id: request.requestID,
//         companyName: data.CompanyName,
//         licenseID: data.LicenceID,
//         requestDate: data.RequestDate,
//       },
//     ]);
//   }
// }


// select all schemas
const newLicense = schema.newLicense;
const accountRequest = schema.accountRequest;
const inspectionRequest = schema.inspectionRequest;
const addNewActivity = schema.addNewActivity;
const stampLicenseLetter = schema.stampLicenseLetter;

// get all data from database
const newLicenseData = await db.select().from(newLicense).all();
const accountRequestData = await db.select().from(accountRequest).all();
const inspectionRequestData = await db.select().from(inspectionRequest).all();
const addNewActivityData = await db.select().from(addNewActivity).all();
const stampLicenseLetterData = await db.select().from(stampLicenseLetter).all();

// console.log(newLicenseData);
// console.log(accountRequestData);
// console.log(inspectionRequestData);
// console.log(addNewActivityData);
// console.log(stampLicenseLetterData);



console.timeEnd("total");

