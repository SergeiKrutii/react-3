import { Component } from "react";
// import PropTypes from "prop-types";
// import StatButton from "./StatButton/StatButton";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (props) => {
    this.setState((prevState) => ({
      [props]: prevState[props] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, elem) => acc + elem
    );
    const countPositiveFeedbackPercentage =
      Math.round((good / countTotalFeedback) * 100) || 0;

    return (
      <>
        <h1>Please leave feedback</h1>
        <button
          onClick={() => this.handleIncrement("good")}
          type="button"
          name="good"
          className="button__stat"
        >
          Good
        </button>
        <button
          onClick={() => this.handleIncrement("neutral")}
          type="button"
          name="neutral"
          className="button__stat"
        >
          Neutral
        </button>
        <button
          onClick={() => this.handleIncrement("bad")}
          type="button"
          name="bad"
          className="button__stat"
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
      </>
    );
  }
}

Feedback.propTypes = {};

export default Feedback;
