import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import { useContext } from "react";
import BackButton from "./BackButton";
import { useNavigate } from 'react-router-dom';


function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={handleBack} />
      </div>
    </div>
  );
}

export default Settings;
