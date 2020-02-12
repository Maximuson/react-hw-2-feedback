import React, { Component } from 'react';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  static defaultProps = {
    options: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  render() {
    const {
      options: { good, neutral, bad },
    } = this.props;
    if (good || neutral || bad) {
      const positive = (good / (good + neutral + bad)) * 100;
      return (
        <div>
          <span>Good: {good}</span> <br />
          <span>Neutral: {neutral}</span> <br />
          <span>Bad: {bad}</span> <br />
          <span>Positive: {Number.parseInt(positive)}%</span> <br />
        </div>
      );
    } else {
      return <Notification message="no feedback given" />;
    }
  }
}

export default Statistics;
