import express from 'express';
/* */
import React from 'react';
import { renderToString } from 'react-dom/server';
import MyComp from './src/MyComp';
import { MYCOMP_PAGE_ROUTE } from './src/Page';

/* */

const PORT = 1234;
express()
  .use(express.static('.'))
  .get('/author', r => r.res.send('Elias Goss'))

  .get(MYCOMP_PAGE_ROUTE, r => r.res.send(renderToString(<MyComp title="hello" text="serv" />)))

  .get('/*', r => r.res.sendFile('index.html', { root: '.' }))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT, () => console.log(process.pid))
;
