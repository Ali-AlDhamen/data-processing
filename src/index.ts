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
app.group('/api/v1', (app) =>
        app
    .post("/upload", uploadFileHandler, {
    body: t.Object({
      file: t.File(
        {
          type: ['text/csv'],          
        },
        
      )
    }),
    detail: {
      tags: ['Upload'],
      summary: 'Upload csv file to process data and store in database',
      description: 'return amount of data uploaded and time taken to upload',
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
        },
        '400': {
          description: 'Bad request'
        },
        '422': {
          description: 'Unprocessable Entity, Expected csv file'
        },
        '500': {
          description: 'Internal server error'
        }

      }
    }
  
  })
  .delete("/requests", deleteDataHandler, {
    detail: {
      tags: ['Delete'],
      summary: 'Delete all data in the database',
      responses: {
        '200': {
          description: 'Data deleted successfully'
        },
        '500': {
          description: 'Internal server error'
        }
      }
    }
  })
  .get("/requests/:requestTable", requestTableHandler, {
    detail: {
      tags: ['Request'],
      summary: 'Get all data from a specific table in the database',
      description: 'only accepts requestTable as a parameter, which is the name of the table in the database. e.g /api/v1/requests/newLicense. only accepts request, newLicense, accountRequest, inspectionRequest, addNewActivity, stampLicenseLetter as requestTable.',
      responses: {
        "200": {
          description: "Data retrieved successfully",
        },
        "400": {
          description: "Bad request",
        },
      
        "500": {
          description: "Internal server error",
        }       
      }
    }
  })
  .get("/report", reportHandler, {
    detail: {
      tags: ['Request'],
      summary: 'Get all data from all tables in the database',
      responses: {
        "200": {
          description: "Data retrieved successfully",
        },
        "500": {
          description: "Internal server error",
        }  
      }
    }
  })).listen(PORT);
