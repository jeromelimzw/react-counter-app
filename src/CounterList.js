import React from "react";
import Counter from "./Counter";

const CounterList = ({
  counters,
  handleDecrement,
  handleIncrement,
  handleDelete
}) => {
  return (
    <div className="bg-lightest-blue pa1 br3">
      {counters.map(item => {
        return (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
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
