import React, { useState } from "react";
import { UseCity } from "../context/CityContext";
function Header() {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Isparta", "Malatya", "Trabzon", "Manisa"];
  const { city, setCity } = UseCity();
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setCity(event.target.value);
  };

  return (
    <div>
      <h2 className="Header">Hava Durumu</h2>
      <div className="comboBox">
        <select value={selectedOption} onChange={handleSelectChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <br />
      </div>
    </div>
  );
}

export default Header;
