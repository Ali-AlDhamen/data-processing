import {
  AccountRequest,
  IRequest,
  NewLicense,
  InspectionRequest,
  AddNewActivity,
  StampLicenseLetter,
} from "../types";
import {
  addNewActivitySchema,
  newLicenseSchema,
  inspectionRequestSchema,
  accountRequestSchema,
  stampLicenseLetterSchema,
} from "./zodSchemas";

const transformNewLicense = (request: IRequest, data: NewLicense) => {
  try {
    newLicenseSchema.parse(data);
    const newLicense = {
      requestID: request.requestID,
      companyName: data.CompanyName,
      licenseType: data.LicenceType,
      isOffice: data.IsOffice.toString(),
      officeName: data.OfficeName,
      officeServiceNumber: data.OfficeServiceNumber,
      requestDate: data.RequestDate,
      activities: data.Activities,
    };
    return newLicense;
  } catch (error) {
    throw new Error("Invalid data for new license request.");
  }
};

const transformAccountRequest = (request: IRequest, data: AccountRequest) => {
  try {
    data.Permissions = data.Permissions.toString();
    accountRequestSchema.parse(data);

    const accountRequest = {
      requestID: request.requestID,
      companyName: data.CompanyName,
      requesterName: data.RequesterName,
      applicantName: data.ApplicantName,
      userName: data.UserName,
      contactEmail: data.ContactEmail,
      permissions: data.Permissions,
    };

    return accountRequest;
  } catch (error) {
    throw new Error("Invalid data for account request.");
  }
};

const transformInspectionRequest = (
  request: IRequest,
  data: InspectionRequest
) => {
  try {
    inspectionRequestSchema.parse(data);

    const inspectionRequest = {
      requestID: request.requestID,
      companyName: data.CompanyName,
      inspectionDate: data.InspectionDate,
      inspectionTime: data.InspectionTime,
      inspectionType: data.InspectionType,
    };

    return inspectionRequest;
  } catch (error) {
    throw new Error("Invalid data for inspection request.");
  }
};

const transformAddNewActivity = (request: IRequest, data: AddNewActivity) => {
  try {
    data.Activities = data.Activities.toString();
    addNewActivitySchema.parse(data);

    const addNewActivity = {
      requestID: request.requestID,
      companyName: data.CompanyName,
      licenseID: data.LicenceID,
      activities: data.Activities,
    };

    return addNewActivity;
  } catch (error) {
    throw new Error("Invalid data for add new activity request.");
  }
};

const transformStampLicenseLetter = (
  request: IRequest,
  data: StampLicenseLetter
) => {
  try {
    stampLicenseLetterSchema.parse(data);

    const stampLicenseLetter = {
      requestID: request.requestID,
      companyName: data.CompanyName,
      licenseID: data.LicenceID,
      requestDate: data.RequestDate,
    };

    return stampLicenseLetter;
  } catch (error) {
    throw new Error("Invalid data for stamp license letter request.");
  }
};

export {
  transformNewLicense,
  transformAccountRequest,
  transformInspectionRequest,
  transformAddNewActivity,
  transformStampLicenseLetter,
};
