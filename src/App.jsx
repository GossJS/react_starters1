import React from 'react';
import { render as r } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MyDiv from './MyDiv';

const render = (Compo, props) =>
  r(
    <AppContainer>
       <Compo {...props} />
    </AppContainer>,
    document.querySelector('.cont')
  );

const starter = () => render(MyDiv, { head: 'Greetings!', body: 'Working!' });
starter();
if (module.hot) module.hot.accept('./MyDiv', starter);
