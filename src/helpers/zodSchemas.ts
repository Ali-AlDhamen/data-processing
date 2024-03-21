import { z } from "zod";
import { AddNewActivity , InspectionRequest, AccountRequest, NewLicense, StampLicenseLetter} from "../types";

const addNewActivitySchema:  z.ZodType<AddNewActivity>  = z.object({
    CompanyName: z.string(),
    LicenceID: z.string(),
    Activities: z.string(),
});

const inspectionRequestSchema:  z.ZodType<InspectionRequest>  = z.object({
    CompanyName: z.string(),
    InspectionDate: z.string(),
    InspectionTime: z.string(),
    InspectionType: z.string(),
});


const accountRequestSchema:  z.ZodType<AccountRequest>  = z.object({
    CompanyName: z.string(),
    RequesterName: z.string(),
    ApplicantName: z.string(),
    UserName: z.string(),
    ContactEmail: z.string(),
    Permissions: z.string(),
});

const newLicenseSchema:  z.ZodType<NewLicense>  = z.object({
    CompanyName: z.string(),
    LicenceType: z.string(),
    IsOffice: z.boolean(),
    OfficeName: z.string(),
    OfficeServiceNumber: z.string(),
    RequestDate: z.string(),
    Activities: z.string(),
});

const stampLicenseLetterSchema:  z.ZodType<StampLicenseLetter>  = z.object({
    CompanyName: z.string(),
    LicenceID: z.string(),
    RequestDate: z.string(),
});

export {
    addNewActivitySchema,
    inspectionRequestSchema,
    accountRequestSchema,
    newLicenseSchema,
    stampLicenseLetterSchema,
};