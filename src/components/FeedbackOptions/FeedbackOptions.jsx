import React from 'react';

const FeedbackOptions = props => {
  const { chooseGood, chooseNeutral, chooseBad } = props;

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
};

export default FeedbackOptions;
