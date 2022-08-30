import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Missions from './Components/Missions';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Myprofile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
