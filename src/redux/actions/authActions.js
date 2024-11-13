"use client"
import { loginUser, registerUser } from '@/services/api';
import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await  loginUser(credentials)
    console.log("rr",response)
    localStorage.setItem('token',response.data.accessToken)
    localStorage.setItem('userId',response.data.userId)
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const logout = () => ({ type: LOGOUT });

export const register = (userInfo) => async (dispatch) => {
  try {
    const response = await  registerUser(userInfo)
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
