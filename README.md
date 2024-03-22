# Data Processing


## Technologies Used

The app is built using the following technologies:

1. [Bun](https://bun.sh) - A modern fast JavaScript runtime.
2. [Elysia](https://elysia.dev) - A modern web framework for Bun.
3. [Zod](https://zod.dev/) - A TypeScript-first schema declaration and validation library.
4. [CSV Simple Parser](https://www.npmjs.com/package/csv-simple-parser) - A simple CSV parser.
5. [Drizzle ORM](https://drizzle.dev) - A modern ORM for Bun.


## Prerequisites

Ensure you have [Bun](https://bun.sh) installed on your system. If you need to install Bun, follow the instructions on the [official Bun installation page](https://bun.sh/install).

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine. Open a terminal and run the following command:

```bash
git clone https://github.com/Ali-AlDhamen/data-processing.git
```

### 2. Navigate to the Repository

Navigate to the repository by running the following command:

```bash
cd data-processing
```


### 3. Install the Dependencies

To install the dependencies, run the following command:

```bash
bun install
```


### 4. Run the App in Development Mode

To run the app, run the following command:

```bash
bun dev
```

The app will be available at [http://localhost:4000](http://localhost:4000).


## Routes

The app has the following routes:

1. `POST /api/v1/upload` - which accepts a CSV file and returns the amount of uploaded data in JSON format.
2. `GET /api/v1/report` - which returns a report of the uploaded data.
3. `DELETE /api/v1/requests` - which deletes all the uploaded data.
4. `GET /api/v1/requests/:requestTable` - which returns the data of a specific request table.


## API Documentation

You can interact with the API using the Swagger UI. To access the Swagger UI, navigate to [http://localhost:4000/swagger](http://localhost:4000/swagger).



