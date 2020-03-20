import React from 'react';
import PropTypes from 'prop-types';
import { options } from '../../App';
const FeedbackOptions = ({ chooseFeedback }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        chooseFeedback(options.GOOD);
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        chooseFeedback(options.NEUTRAL);
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        chooseFeedback(options.BAD);
      }}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  chooseFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
