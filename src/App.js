import Home from "./pages/Home";
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
