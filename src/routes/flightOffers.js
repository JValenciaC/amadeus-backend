

import express from "express";
import  getFlightOffers  from '../controllers/flightOffers.js';
const router = express.Router();


router.get("/getFlightOffers",  getFlightOffers);


export default router;