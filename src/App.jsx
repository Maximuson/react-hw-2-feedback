import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  chooseGood = () => {
    this.setState(state => {
      return {
        good: state.good + 1,
      };
    });
  };
  chooseNeutral = () => {
    this.setState(state => {
      return {
        neutral: state.neutral + 1,
      };
    });
  };
  chooseBad = () => {
    this.setState(state => {
      return {
        bad: state.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedbach">
          <FeedbackOptions
            chooseGood={this.chooseGood}
            chooseBad={this.chooseBad}
            chooseNeutral={this.chooseNeutral}
          />
        </Section>
        <Section title="Statistics">
          <Statistics options={{ good, neutral, bad }} />
        </Section>
      </div>
    );
  }
}

export default App;
