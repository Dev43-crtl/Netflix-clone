import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './components/Routers';
import './index.css';
import Home from './templates/Home/Home';


ReactDOM.render(
  <React.StrictMode>
    <Routers>
    <Home />
    </Routers>
  </React.StrictMode>,
  document.getElementById('root')
);

