import React from 'react';
import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { chooseGood, chooseNeutral, chooseBad } = this.props;
    return (
      <div>
        <button type="button" onClick={chooseGood}>
          Good
        </button>
        <button type="button" onClick={chooseNeutral}>
          Neutral
        </button>
        <button type="button" onClick={chooseBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
