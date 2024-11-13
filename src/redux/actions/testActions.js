"use client"
import axios from 'axios';

export const START_TEST = 'START_TEST';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const END_TEST = 'END_TEST';

export const startTest = (testId) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/tests/${testId}/start`);
    dispatch({ type: START_TEST, payload: response.data });
  } catch (error) {
    console.error('Failed to start test:', error);
  }
};

export const answerQuestion = (testId, questionId, answer) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/tests/${testId}/questions/${questionId}/answer`, { answer });
    dispatch({ type: ANSWER_QUESTION, payload: response.data });
  } catch (error) {
    console.error('Failed to answer question:', error);
  }
};

export const endTest = () => ({ type: END_TEST });
