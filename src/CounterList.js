import React from "react";
import Counter from "./Counter";

const CounterList = ({ counters, handleDecrement,handleIncrement,handleDelete }) => {
  return (
    <div className="bg-lightest-blue pa1 br3">
      {counters.map(item => {
        return (
          <Counter
            id={item.id}
            value={item.value}
            key={Math.round(Math.random() * 10000)}
            handleDecrement={() => {
              handleDecrement(item.id);
            }}
            handleIncrement={() => {
                handleIncrement(item.id);
              }}
              handleDelete={() => {
                handleDelete(item.id);
              }}
          />
        );
      })}
    </div>
  );
};

export default CounterList;
