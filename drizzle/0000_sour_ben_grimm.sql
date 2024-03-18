CREATE TABLE `account_request` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`CompanyName` text,
	`RequesterName` text,
	`ApplicantName` text,
	`UserName` text,
	`ContactEmail` text,
	`Permissions` text
);
--> statement-breakpoint
CREATE TABLE `add_new_activity` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`CompanyName` text,
	`LicenseID` text,
	`Activities` text
);
--> statement-breakpoint
CREATE TABLE `inspection_request` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`CompanyName` text,
	`InspectionDate` text,
	`InspectionTime` text,
	`InspectionType` text
);
--> statement-breakpoint
CREATE TABLE `new_license` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`CompanyName` text,
	`LicenseType` text,
	`IsOffice` text,
	`OfficeName` text,
	`OfficeServiceNumber` text,
	`RequestDate` text,
	`Activities` text
);
--> statement-breakpoint
CREATE TABLE `request` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`RequestType` integer,
	`RequestStatus` integer,
	`RequestData` text
);
--> statement-breakpoint
CREATE TABLE `stamp_license_letter` (
	`RequestID` integer PRIMARY KEY NOT NULL,
	`CompanyName` text,
	`LicenseID` text,
	`RequestDate` text
);
