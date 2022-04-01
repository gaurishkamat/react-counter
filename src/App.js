import './App.css';
import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  //state is a plain js object, used to maintain data within a component
  //props is a plain js object which is passed from parent to child

  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this); // this refers to App
    this.decrementCount = this.decrementCount.bind(this); // this refers to App
    this.resetCount = this.resetCount.bind(this); // this refers to App

    this.state = {
      count: 0, //number
      students: [],
      people: [],
    };
    console.log('Constructor');
  }

  //Mounting

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount- foreg: calling an api');
  }

  //Updating Phase

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    alert('componentWillUnmount');
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
    });
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }

  render() {
    console.log('Render');
    return (
      <Counter
        count={this.state.count}
        incrementCount={this.incrementCount}
        decrementCount={this.decrementCount}
        resetFunction={this.resetCount}
      />
    );
  }
}

export default App;

//JSX is Java Script XML - It is a syntatic sugar to write html inside javascript.
// normal function has this of its own, arrow function does not have this of its own.
// in case of arrow function this refers to where the function is defined, in case of normal function
// this refers to from where the function is called

// DOM mount- it is rendered once

//jsx- class comp, functional comp, state, props

//parent comp- state-

//from parent to child

//child comp- data

//state, props

//conditional rendering
