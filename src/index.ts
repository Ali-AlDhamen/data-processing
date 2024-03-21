import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import {
  deleteDataHandler,
  reportHandler,
  requestTableHandler,
  uploadFileHandler,
} from "./handlers";

const PORT = 4000;

const app = new Elysia().use(swagger(
  {
    documentation: {
      info: {
          title: 'Solution by 42 Documentation',
          version: '1.0.0'
      },
      tags: [
        { name: 'Upload', description: 'upload data endpoints' },
        { name: 'Delete', description: 'Delete data endpoints' },
        { name: 'Request', description: 'Request data endpoints' },
      ]
  }
  }
));
app
  .post("/api/v1/upload", uploadFileHandler, {
    detail: {
      tags: ['Upload'],
      summary: 'Upload csv file to process data and store in database and return amount of data uploaded and time taken to upload',
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                file: {
                  type: 'string',
                  format: 'binary'
                }
              }
            }
          }
        }
      },
      responses: {
        '200': {
          description: 'File uploaded successfully'
        }
      }
    }
  })
  .delete("/api/v1/delete", deleteDataHandler, {
    detail: {
      tags: ['Delete'],
      summary: 'Delete all data in the database',
      responses: {
        '200': {
          description: 'Data deleted successfully'
        }
      }
    }
  })
  .get("/api/v1/requests/:requestTable", requestTableHandler, {
    detail: {
      tags: ['Request'],
      summary: 'Get all data from a specific table in the database',
      description: 'only accepts requestTable as a parameter, which is the name of the table in the database. e.g /api/v1/requests/newLicense. only accepts request, newLicense, accountRequest, inspectionRequest, addNewActivity, stampLicenseLetter as requestTable.',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                requestTable: {
                  type: 'string',
                  enum: ['request', 'newLicense', 'accountRequest', 'inspectionRequest', 'addNewActivity', 'stampLicenseLetter']
                }
              }
            }
          }
        }
      
      },
      responses: {
        "200": {
          description: "Data retrieved successfully",
        },       
      }
    }
  })
  .get("/api/v1/report", reportHandler, {
    detail: {
      tags: ['Request'],
      summary: 'Get all data from all tables in the database',
      responses: {
        "200": {
          description: "Data retrieved successfully",
        },       
      }
    }
  })
  .listen(PORT);
