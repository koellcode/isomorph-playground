import React from "react";
import http from "http";
import express from "express";
import { renderToString, renderToStaticMarkup } from "inferno-server";
import { RouterContext, match } from "inferno-router";

import Router from "../common/routes";
import HTML from "./Page";

const app = express();

app.use(express.static("build/client"));

app.use((req, res) => {
  const renderProps = match(Router, req.originalUrl);

  if (renderProps.redirect) {
    return res.redirect(renderProps.redirect);
  }

  const content = <HTML><RouterContext {...renderProps} /></HTML>;
  res.send("<!DOCTYPE html>\n" + renderToString(content));
});

app.server = http.createServer(app);
app.server.listen(process.env.PORT || 3000);

console.log(`Started on port ${app.server.address().port}`);
