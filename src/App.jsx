import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Page from './Page';

const render = (Compo, props = {}) =>
  r(
    <AppContainer><BrowserRouter>
       <Compo {...props} />
    </BrowserRouter></AppContainer>,
    document.querySelector('.cont')
  );

const starter = () => render(Page);
starter();
if (module.hot) module.hot.accept('./Page', starter);
