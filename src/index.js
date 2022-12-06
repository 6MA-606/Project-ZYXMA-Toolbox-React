import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes , Route} from "react-router-dom";
// import LandingPage from './landingpage/main';
import Toolbox from './page/toolbox/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LandingPage />} />
      <Route path="/zyxma-toolbox" element={<Toolbox lightModeBG="#fefefe" darkModeBG="#27273a"/>} /> */}
      <Route path="/" element={<Toolbox lightModeBG="#fefefe" darkModeBG="#27273a"/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
