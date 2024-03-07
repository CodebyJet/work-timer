import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <Router>
      <main>
        <SettingsContext.Provider value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Timer />} />
          </Routes>
        </SettingsContext.Provider>
      </main>
    </Router>
  );
}

export default App;

