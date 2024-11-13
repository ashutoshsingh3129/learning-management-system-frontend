"use client";
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Interceptor to add the token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // assuming the token is stored in local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// API requests
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchQuestion = (testId) => API.get(`/tests/${testId}`);
export const createQuestion = (data) => API.post('/question', data);
export const startTest = (testId,questionId,data) => API.post(`/tests/${testId}/questions/${questionId}/answer`,data);
export const registerTest=(data)=> API.post('tests/register',data)