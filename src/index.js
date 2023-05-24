import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Class_learn from './class_learn';
import Accordion from './class_learn';
import PropsClass from './propsClass';
import Form from './form_file';
import Table_file from './table_file';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Accordion/> */}
    {/* <Class_learn/> */}
    {/* <PropsClass/> */}
    <Form title="home"/>
    {/* <Table_file/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
