CREATE TABLE `account_request` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`CompanyName` text,
	`RequesterName` text,
	`ApplicantName` text,
	`UserName` text,
	`ContactEmail` text,
	`Permissions` text,
	`RequestID` integer NOT NULL,
	FOREIGN KEY (`RequestID`) REFERENCES `request`(`RequestID`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `add_new_activity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`CompanyName` text,
	`LicenseID` text,
	`Activities` text,
	`RequestID` integer NOT NULL,
	FOREIGN KEY (`RequestID`) REFERENCES `request`(`RequestID`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `inspection_request` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`CompanyName` text,
	`InspectionDate` text,
	`InspectionTime` text,
	`InspectionType` text,
	`RequestID` integer NOT NULL,
	FOREIGN KEY (`RequestID`) REFERENCES `request`(`RequestID`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `new_license` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`CompanyName` text,
	`LicenseType` text,
	`IsOffice` text,
	`OfficeName` text,
	`OfficeServiceNumber` text,
	`RequestDate` text,
	`Activities` text,
	`RequestID` integer NOT NULL,
	FOREIGN KEY (`RequestID`) REFERENCES `request`(`RequestID`) ON UPDATE no action ON DELETE cascade
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
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`CompanyName` text,
	`LicenceID` text,
	`RequestDate` text,
	`RequestID` integer NOT NULL,
	FOREIGN KEY (`RequestID`) REFERENCES `request`(`RequestID`) ON UPDATE no action ON DELETE cascade
);
