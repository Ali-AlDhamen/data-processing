import { db } from "./db";
import * as schema from "./../schemas/schema";

await db.insert(schema.request).values([
    {
        id: 1,
        requestType: 1,
        requestStatus: 1,
        requestData: "Hello World",
    },
    {
        id: 2,
        requestType: 2,
        requestStatus: 2,
        requestData: "Hello World",
    },
    {
        id: 3,
        requestType: 3,
        requestStatus: 3,
        requestData: "Hello World",
    },
    {
        id: 4,
        requestType: 4,
        requestStatus: 4,
        requestData: "Hello World",
    },
    {
        id: 5,
        requestType: 5,
        requestStatus: 5,
        requestData: "Hello World",
    },
    
]);

console.log(`Seeding complete.`);