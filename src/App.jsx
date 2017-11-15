import React from 'react';
import { render } from 'react-dom';
import MyComp from './MyComp';

const data = [
  { title: 'First Compo', text: 'Lorem ipsum' },
  { title: 'Second Compo', text: 'Quo vadis?' },
  { title: 'Latin is chique', text: 'O tempora o mores' },
  { title: 'I adore Roma', text: 'Status quo' }
];


const App = () => (
        <div>
          {data.map((x, i) =>
                  <MyComp key={i} {...x} />)}
        </div>);
render(
  <App />,
  document.querySelector('.container')
);
