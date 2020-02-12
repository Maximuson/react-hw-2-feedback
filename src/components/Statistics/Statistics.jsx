import React from 'react';
import Notification from '../Notification/Notification';

const Statistics = props => {
  const {
    options: { good, neutral, bad },
  } = props;

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
};

Statistics.defaultProps = {
  options: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
};
export default Statistics;
