import React from "react";

const TotalCounts = ({ totalcounters, totalcount, average }) => {
  return (
    <div className="w-100 flex gray justify-around bg-lightest-blue br3 pa1 mv2 pv2 shadow-5">
      <span className="fw7 f4">Counters: {totalcounters}</span>
      <span className="fw7 f4 mh3">Total: {totalcount}</span>
      <span className="fw7 f4">
        Average: {isNaN(average) ? (0).toFixed(2) : average}
      </span>
    </div>
  );
};

export default TotalCounts;
