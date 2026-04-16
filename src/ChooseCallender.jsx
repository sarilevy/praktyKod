import React, { useState, useEffect } from "react";
import { Year } from "./Callender"

export const ChooseCallender = ({ setColor, setBackGroundColor, color, backGroundColor, refresh }) => {
  const [callenders, setCallenders] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // טוען את הנתונים מה-localStorage
  useEffect(() => {
    
    let x
    let arr = localStorage.getItem("basic")
    if (arr == null)
      x = []
    else
      x = JSON.parse(arr)
    setCallenders(x);
    console.log("callenders: ", callenders)
  }, [refresh]);

  useEffect(() => {
    // כשיש שינוי בלוח הנבחר, מעדכנים צבעים לפי הלוח
    if (callenders.length > 0 && callenders[selectedIndex]) {
      const selected = callenders[selectedIndex];
      setColor(selected.color || color);
      setBackGroundColor(selected.backGroundColor || backGroundColor);
    }
  }, [selectedIndex, callenders, color, backGroundColor]);

  // בעת שינוי הבחירה
  // const handleChange = (e) => {
  //   setSelectedIndex(e.target.value);
  // };

  const selectedCallender = callenders[selectedIndex];

  return (
    <>
      {console.log("callenders: " + callenders)}
      {/* בחירת לוח שנה */}
      <select value={selectedIndex} onChange={(event) => setSelectedIndex(event.target.value)}>
        <option disabled value="">בחר לוח שנה</option>
        {Array.isArray(callenders) && callenders?.map(cal => (
          <option key={cal.Name}> {cal.Name}</option>
        ))}


        {/* {callenders.map((cal, i) => (
          <option key={i} value={i}>
            {cal.Name}
          </option>
        ))} */}
      </select>

      {selectedCallender && Array.isArray(selectedCallender.Months) && (
        <>
          {console.log("selectedCallender:", selectedCallender)}
          <h3>לוח נבחר: {selectedCallender.Name}</h3>
          <Year color={color} backGroundColor={backGroundColor} BasicCalender={selectedCallender} ></Year>
        </>
      )}
    </>
  );
};