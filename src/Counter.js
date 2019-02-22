import React from "react";

const Counter = ({ value, handleDecrement, handleIncrement, handleDelete }) => {
  return (
    <div className="w-100 flex justify-between br3 mv2">
      <span
        className={`w-30 f2 fw7 ${
          value < 0 ? "bg-red" : value > 0 ? "bg-green" : "bg-gold"
        } br3 near-white shadow-5 ma1 animated flipInX`}
      >
        {value === 0 ? "zero" : value}
      </span>
      <div className="w-60 flex justify-between">
        <i
          className="fas fa-minus-square flex self-center f1 w-30 pointer grow light-red  shadow-5 br3"
          onClick={handleDecrement}
        />
        <i
          className="fas fa-plus-square flex self-center f1 w-30 pointer grow light-green shadow-5 br3"
          onClick={handleIncrement}
        />
        <i
          className="fas fa-trash-alt flex self-center f1 w-30 pointer dim gray shadow-5 br3"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Counter;
