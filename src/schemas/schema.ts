import { sqliteTable, text, integer, check} from "drizzle-orm/sqlite-core";




export const request = sqliteTable("request", {
    id: integer('RequestID').primaryKey(),
    requestType: integer('RequestType'),
    requestStatus: integer('RequestStatus'),
    requestData: text('RequestData')
});


export const newLicense = sqliteTable("new_license", {
    id: integer('RequestID').primaryKey(),
    companyName: text('CompanyName'),
    licenseType: text('LicenseType'),
    isOffice: text('IsOffice'),
    officeName: text('OfficeName'),
    officeServiceNumber: text('OfficeServiceNumber'),
    requestDate: text('RequestDate'),
    activities: text('Activities')
});



export const accountRequest = sqliteTable("account_request", {
    id: integer('RequestID').primaryKey(),
    companyName: text('CompanyName'),
    requesterName: text('RequesterName'),
    applicantName: text('ApplicantName'),
    userName: text('UserName'),
    contactEmail: text('ContactEmail'),
    permissions: text('Permissions')
});


export const inspectionRequest = sqliteTable("inspection_request", {
    id: integer('RequestID').primaryKey(),
    companyName: text('CompanyName'),
    inspectionDate: text('InspectionDate'),
    inspectionTime: text('InspectionTime'),
    inspectionType: text('InspectionType')
});



export const addNewActivity = sqliteTable("add_new_activity", {
    id: integer('RequestID').primaryKey(),
    companyName: text('CompanyName'),
    licenseID: text('LicenseID'),
    activities: text('Activities')
});


export const stampLicenseLetter = sqliteTable("stamp_license_letter", {
    id: integer('RequestID').primaryKey(),
    companyName: text('CompanyName'),
    licenseID: text('LicenceID'),
    requestDate: text('RequestDate')
});