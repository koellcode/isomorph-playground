import React from "react";

const Html = ({ children }) =>
  <html lang="de">
    <head>
      <title>Infernizer</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <div id="inferno">{children}</div>
      <script src="app.js" />
    </body>
  </html>;

export default Html;
