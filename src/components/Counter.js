import { bindExpression } from '@babel/types';
import React from 'react';

class Counter extends React.Component {
  //props- 1. count, 2. incrementCount, 3. decrementCount, 4. resetFunction

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='parent-container'>
        {this.props.name}
        <h1 className='heading'>Counter App</h1>
        <h1 className='count'>{this.props.count}</h1>
        <div className='btn-container'>
          <button className='btn primary' onClick={this.props.incrementCount}>
            Increment
          </button>
          <button className='btn primary' onClick={this.props.decrementCount}>
            Decrement
          </button>
          <button className='btn warning' onClick={this.props.resetFunction}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
