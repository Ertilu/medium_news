import axios from 'axios';
import { newsApi } from '../../data/apiData';
import { SUCCESS_GET_ARTICLE, LOADING_GET_ARTICLE, FAILED_GET_ARTICLE } from './types';

export const fetchArticle = topic => async (dispatch) => {
  dispatch({
    type: LOADING_GET_ARTICLE,
  });
  try {
    const result = await axios.get(`${newsApi}/invironment/tagged/${topic}`);
    dispatch({
      type: SUCCESS_GET_ARTICLE,
      result: result.data,
    });
  } catch (e) {
    dispatch({
      type: FAILED_GET_ARTICLE,
      errMsg: 'Failed to load data. Please check ypur internet connection.',
    });
  }
};
