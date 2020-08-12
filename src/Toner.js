import React from "react";

const Toner = () => {
  return (
    <div className="toner-request">
      <h2 className="mreadings">Printer Toner Request</h2>
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
        <label for="toners">Toners Needed:</label>
        <input
          type="text"
          placeholder="What toners do you need?"
          name="toner"
          id="toner"
        />
        <button type="submit" className="btn" id="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Toner;
