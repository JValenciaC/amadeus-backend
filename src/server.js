
import express from "express";
import { createServer } from "http";
import cors from "cors";


// Routes
import routesConfig from "./routes/index.js";

// Middlewares
//import middleWaresConfig from "./middlewares/index.js";


/**
 * @file server.js
 * @author Jose Valencia
 * @description Server config file
 */

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.app.use(cors())
    // this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    return middleWaresConfig(this.app);
  }

  routes() {
    return routesConfig(this.app);
  }

  async listen() {
    //await dbConnection();
    const httpServer = createServer(this.app);
    httpServer.listen(this.port, () => {
      console.log("Server listen on port " + this.port);
    });
  }
}

export default Server;
