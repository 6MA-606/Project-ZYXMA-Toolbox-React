import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes , Route} from "react-router-dom";
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

reportWebVitals();
