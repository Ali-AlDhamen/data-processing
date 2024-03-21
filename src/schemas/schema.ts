import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const request = sqliteTable("request", {
  requestID: integer("RequestID").primaryKey(),
  requestType: integer("RequestType"),
  requestStatus: integer("RequestStatus"),
  requestData: text("RequestData"),
});

export const newLicense = sqliteTable("new_license", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("CompanyName"),
  licenseType: text("LicenseType"),
  isOffice: text("IsOffice"),
  officeName: text("OfficeName"),
  officeServiceNumber: text("OfficeServiceNumber"),
  requestDate: text("RequestDate"),
  activities: text("Activities"),
  requestID: integer("RequestID")
    .references(() => request.requestID, { onDelete: "cascade" })
    .notNull(),
});

export const accountRequest = sqliteTable("account_request", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("CompanyName"),
  requesterName: text("RequesterName"),
  applicantName: text("ApplicantName"),
  userName: text("UserName"),
  contactEmail: text("ContactEmail"),
  permissions: text("Permissions"),
  requestID: integer("RequestID")
    .references(() => request.requestID, { onDelete: "cascade" })
    .notNull(),
});

export const inspectionRequest = sqliteTable("inspection_request", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("CompanyName"),
  inspectionDate: text("InspectionDate"),
  inspectionTime: text("InspectionTime"),
  inspectionType: text("InspectionType"),
  requestID: integer("RequestID")
    .references(() => request.requestID, { onDelete: "cascade" })
    .notNull(),
});

export const addNewActivity = sqliteTable("add_new_activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("CompanyName"),
  licenseID: text("LicenseID"),
  activities: text("Activities"),
  requestID: integer("RequestID")
    .references(() => request.requestID, { onDelete: "cascade" })
    .notNull(),
});

export const stampLicenseLetter = sqliteTable("stamp_license_letter", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  companyName: text("CompanyName"),
  licenseID: text("LicenceID"),
  requestDate: text("RequestDate"),
  requestID: integer("RequestID")
    .references(() => request.requestID, { onDelete: "cascade" })
    .notNull(),
});
