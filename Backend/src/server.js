import express from "express";
import fileUpload from "express-fileupload";
import { routes, protectRouteMiddleware } from "./routes";
import * as admin from "firebase-admin";
import credentials from "./credentials.json";

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

// body-parser can also be used instead of below two lines
app.use(express.static(__dirname + "/uploads/"));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});

routes.forEach((route) =>
  app[route.method](route.path, protectRouteMiddleware, route.handler)
);

app.listen(8080, () => {
  console.log("Server is listening on Port 8080");
});
