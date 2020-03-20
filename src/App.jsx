import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

export const options = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  chooseFeedback = feedback => {
    this.setState(state => {
      return {
        [feedback]: state[feedback] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedbach">
          <FeedbackOptions chooseFeedback={this.chooseFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics options={{ good, neutral, bad }} />
        </Section>
      </div>
    );
  }
}

export default App;
