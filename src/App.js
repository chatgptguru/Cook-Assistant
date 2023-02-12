import Home from "./pages/Home";
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/utility-patterns.css'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
    <Routes>
     <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
       <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
