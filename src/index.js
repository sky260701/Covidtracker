import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './Component/Data';
import { Switch , BrowserRouter as Router , Route } from "react-router-dom";
import { createBrowserHistory } from "history";


const appHistory = createBrowserHistory({forceRefresh:true});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router history={appHistory}>
    <switch>
    <Route exact path="/" component={App} />
        <Route  path="/Data" component={Data} />
    </switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
