import React from "react";
import Register from "./Page/Register";
import LandingPage from "./landingPage/LandingPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
<>
    <BrowserRouter>
       <Routes>

         
            <Route index element={<LandingPage />} />
            <Route path="/register" element={<Register />}/>
          </Routes>
        
     </BrowserRouter>
    
     

     </>
  );
}


export default App;


