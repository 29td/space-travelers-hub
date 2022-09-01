import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Missions from './Components/missions/Missions';
import MyProfile from './Components/Myprofile';
import Rockets from './Components/rockets/Rockets';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
