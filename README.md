# GraphQL, Apollo projects

d-fullstack-library directory contains final form of the project.

## a-apollo-server

Install the dependencies and start the server.

```sh
cd a-apollo-server
npm install
npm start
```

Check [localhost:4000](http://localhost:4000/) to see Apollo Server interface.

## b-library-frontend-apollo-client

- This part uses the server from [a-apollo-server](#a-apollo-server), so make sure the server is running before following the steps below.

Install the dependencies.

```sh
cd b-library-frontend-apollo-client
npm install
npm start
```

Check [localhost:3000](http://localhost:3000/).

## c-apollo-server-mongoose

Install the dependencies.

```sh
cd a-apollo-server
npm install
```

Create **.env** file at the root of the project.
Set MONGODB_URI=**your_mongodb_uri** [(see)](https://www.mongodb.com/docs/guides/atlas/connection-string/)

> You can also set database name (e.g fsoLibrary) in uri. It is not mandatory.

Set SECRET_KEY=**your_secret_key**
Start the server.

```sh
npm start
```

Check [localhost:4000](http://localhost:4000/) to see Apollo Server interface.

# d-fullstack-library

This directory contains both the backend and the frontend of ultimate form of the project.

# _apollo-server-mongoose_

Install the dependencies.

```sh
cd apollo-server-mongoose
npm install
```

Create **.env** file at the root of the project.
Set MONGODB_URI=**your_mongodb_uri** [(see)](https://www.mongodb.com/docs/guides/atlas/connection-string/)

> You can also set database name (e.g fsoLibrary) in uri. It is not mandatory.

Set SECRET_KEY=**your_secret_key**
Start the server.

```sh
npm start
```

Check [localhost:4000](http://localhost:4000/) to see Apollo Server interface.

# Github Repository Rating App

This app uses the GraphQL API from [https://github.com/fullstack-hy2020/rate-repository-api](https://github.com/fullstack-hy2020/rate-repository-api), so make sure the server is running before starting the application.

Install the dependencies.

```sh
cd rate-repository-app
npm install
npm start
```

- Follow instructions in the console.

Check [localhost:3000](http://localhost:3000/).

_To use login functionality in the application, you need to manually create a user in MongoDB by Apollo Server_

- Navigate to [localhost:4000](http://localhost:4000/) Apollo Server interface in your browser
- Choose mutation -> createUser respectively
- Fill in required places and click Mutation

Then log in

- Navigate to [localhost:3000](http://localhost:3000/)
- Click login and type your username manually created
- Type **secret** as password and log in

---

> ## University of Helsinki Certificate

![UniversityOfHelsinkiCertificate](./certificate-graphql.png)
Certificate link: https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/8a44720b6aff8026712ae5683bdffb47
