"use client"
import { START_TEST, ANSWER_QUESTION, END_TEST } from '../actions/testActions';

const initialState = {
  currentTest: null,
  currentQuestion: null,
  questions: [],
  score: 0,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TEST:
      return {
        ...state,
        currentTest: action.payload.testId,
        questions: action.payload.questions,
        currentQuestion: action.payload.questions[0],
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.nextQuestion,
        score: state.score + (action.payload.correct ? 1 : 0),
      };
    case END_TEST:
      return initialState;
    default:
      return state;
  }
};

export default testReducer;
