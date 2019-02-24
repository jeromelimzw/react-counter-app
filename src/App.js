import React, { Component } from "react";
import counters from "./sampleData";
import CounterList from "./CounterList";
import ExtraButtons from "./ExtraButtons";
import TotalCounts from "./TotalCounts";
import produce from "immer";

export class App extends Component {
  constructor() {
    super();
    this.state = { counters };
  }

  handleAddCounter = () => {
    const nextState = produce(this.state.counters, draft => {
      draft.push({ id: Math.round(Math.random() * 100000), value: 0 });
    });
    this.setState({ counters: nextState });
  };

  handleDecrement = tarId => {
    const nextState = produce(this.state.counters, draft => {
      draft.find(a => a.id === tarId).value--;
    });
    this.setState({ counters: nextState });
  };

  handleIncrement = tarId => {
    const nextState = produce(this.state.counters, draft => {
      draft.find(a => a.id === tarId).value++;
    });
    this.setState({ counters: nextState });
  };

  handleDelete = tarId => {
    let nextState = this.state.counters;
    nextState = nextState.filter(a => a.id !== tarId);
    this.setState({ counters: nextState });
  };

  handleClear = () => {
    let nextState = this.state.counters;
    nextState = nextState.map(a => {
      return { id: Math.round(Math.random() * 100000), value: 0 };
    });
    this.setState({ counters: nextState });
  };

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  };

  render() {
    const { counters } = this.state;
    const {
      handleAddCounter,
      handleDecrement,
      handleIncrement,
      handleDelete,
      handleClear,
      handleDeleteAll
    } = this;
    const totalcounters = counters.length;
    const totalcount = counters.reduce((a, b) => a + b.value, 0);
    const average = (totalcount / totalcounters).toFixed(2);
    return (
      <div>
        <h1 className="tracked-tight white">Counter_Lab</h1>
        <ExtraButtons
          handleAddCounter={handleAddCounter}
          handleClear={handleClear}
          handleDeleteAll={handleDeleteAll}
        />
        <TotalCounts
          totalcounters={totalcounters}
          totalcount={totalcount}
          average={average}
        />
        {totalcounters === 0 ? (
          <span className="f3 white">
            please insert more <span className="strike">quarters</span> counters
            to continue
          </span>
        ) : (
          <CounterList
            counters={counters}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleDelete={handleDelete}
          />
        )}
      </div>
    );
  }
}

export default App;
