import React from 'react';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ options: { good = 1, neutral = 0, bad = 0 } }) =>
  good || neutral || bad ? (
    <div>
      <span>Good: {good}</span> <br />
      <span>Neutral: {neutral}</span> <br />
      <span>Bad: {bad}</span> <br />
      <span>
        Positive: {Number.parseInt((good / (good + neutral + bad)) * 100)}%
      </span>
      <br />
    </div>
  ) : (
    <Notification message="no feedback given" />
  );

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
export default Statistics;
