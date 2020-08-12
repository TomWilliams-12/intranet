import React from "react";

const MeterRead = () => {
  return (
    <div className="meter-readings">
      <h2 className="mreadings">Printer Meter Readings</h2>
      <form className="meters">
        <label for="siteName">Site Name:</label>
        <input
          type="text"
          placeholder="What site are you on?"
          name="siteName"
          id="siteName"
        />
        <label for="department">Department:</label>
        <input
          type="text"
          placeholder="Site or Sales?"
          name="department"
          id="department"
        />
        <label for="serial">Serial Number:</label>
        <input
          type="text"
          placeholder="What is the serial number of the printer?"
          name="serial"
          id="serial"
        />
        <label for="black">Black Reading:</label>
        <input
          type="text"
          placeholder="What is the black reading?"
          name="black"
          id="black"
        />
        <label for="colour">Colour Reading:</label>
        <input
          type="text"
          placeholder="What is the colour reading?"
          name="colour"
          id="colour"
        />
        <button type="submit" className="btn" id="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MeterRead;
