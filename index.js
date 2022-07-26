
import dotenv from "dotenv";
import serverConfig from "./src/server.js";

/**
 * @file index.js
 * @author Jose Valencia
 * @description Index file
 */

dotenv.config();
new serverConfig();

//Server.listen();
