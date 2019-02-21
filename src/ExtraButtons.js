import React from "react";

const ExtraButtons = ({ handleAddCounter, handleClear }) => {
  return (
    <div className="w-100 flex justify-between bg-light-green br3 pa2 shadow-5">
      <input
        type="button"
        value="CLEAR"
        className="w-40 br3 bg-light-red white f3 fw7 pointer grow bw0 shadow-5"
        onClick={handleClear}
      />
      <input
        type="button"
        value="ADD"
        className="w-40 br3 bg-green white f3 fw7 pointer grow bw0 shadow-5"
        onClick={handleAddCounter}
      />
    </div>
  );
};

export default ExtraButtons;
