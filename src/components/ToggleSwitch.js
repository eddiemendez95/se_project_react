import { useState, useContext, useEffect } from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperaturUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitch } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  const white = "#FFF";
  const grey = "rgba(0, 0, 0, 0.5)";

  return (
    <div className="switch">
      <input
        className="switch__input"
        id={`toggle_switch`}
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleSwitch}
        value={currentTemperatureUnit}
      />
      <label className="switch__label" htmlFor={`toggle_switch`}>
        <span className={`switch__button`} />
        <div className="switch__states">
          <span
            className="switch__f"
            style={{
              color: (!isChecked && white) || (isChecked && grey),
            }}
          >
            F
          </span>
          <span
            className="switch__c"
            style={{
              color: (!isChecked && grey) || (isChecked && white),
            }}
          >
            C
          </span>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
