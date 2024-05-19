
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./Components/MainPage";


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element = {<MainPage/>} />
        <Route exact path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
