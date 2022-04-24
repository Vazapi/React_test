import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { events } from './moks';

// ReactDOM.render(<App/>, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App events={events} />
  
);

