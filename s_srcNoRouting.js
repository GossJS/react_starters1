import express from 'express';
/* */
import React from 'react';
import { renderToString } from 'react-dom/server';
import Page from './src/Page2';

const html = what => `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <title>closer to SSR</title>
  </head>
  <body>
    <div class="container">
      <h1 class="display-3"></h1>
      <h2>closer to SSR</h2>
      <div class="cont">${what}</div>
    </div>
  <script type="text/javascript" src="./bundle.js"></script></body>
</html>
`;

const PORT = 1234;
express()
  .use(express.static('.'))
  .get('/author', r => r.res.send('Elias Goss'))

  .get('/', r => r.res.send(html(renderToString(<Page />))))

  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT, () => console.log(process.pid))
;
