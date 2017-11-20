import express from 'express';

const PORT = 1234;
express()
  .use(express.static('.'))
  .get('/author', r => r.res.send('Elias Goss'))

  .get('/mycomp', r => r.res.send('Hahaha no rendering'))

  .get('/*', r => r.res.sendFile('index.html', { root: '.' }))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`))
  .listen(process.env.PORT || PORT, () => console.log(process.pid))
;
