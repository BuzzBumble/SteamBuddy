import './App.css';
import Home from "./components/Home";
import Overview from "./components/Overview";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/overview" element={<Overview/> } />
      </Routes>
    </Router>
  );
}

export default App;
