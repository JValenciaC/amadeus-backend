

import flightOffers from './flightOffers.js';
import express from "express";

/**
 * @file index.js
 * @author Jose Valencia
 * @description Index routes
 */

const routesConfig = (app) => {
  const apiVersion = process.env.API_VERSION;

  const paths = {
    flightOffers: `/api/v${apiVersion}/flightOffers`,
  };

  app.use(paths.flightOffers, flightOffers);

};

export default routesConfig;
