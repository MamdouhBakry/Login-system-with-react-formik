import './App.css';
import { StyledContainer } from "./components/Styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Login />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;
