import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as swaggerUi from 'swagger-ui-express'
import { port } from '../config'
import { routers as routes } from './routes/index'
import * as swaggerDocument from './swagger.json';
import * as cors from 'cors'

const crypto = require('crypto'),
  fs = require("fs"),
  https = require('https'),
  http = require("http");

//   let options={
//  privateKey: fs.readFileSync('privatekey.pem').toString(),
//  certificate : fs.readFileSync('certificate.pem').toString()
//   }

  // create express app
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Enable Cors
  app.use(cors({credentials: true, origin: true}));

  // run app
  http.createServer(app).listen(port, () => console.log(`App is up and running on port ${port}`));
  // https.createServer(options, app).listen(443);


  // create swagger documentation , swaggerUi.setup(swaggerDocument)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Register routes
  // app.use("/cabsol_inventory/api/v1/user/",middleware, routes.user);
  app.use("/cabsol_inventory/api/report/", routes.reports);
  app.use("/cabsol_inventory/api/chart/", routes.charts);
 


// }).catch(error => console.log("TypeORM connection error: ", error));
