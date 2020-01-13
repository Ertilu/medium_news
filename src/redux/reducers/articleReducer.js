import { SUCCESS_GET_ARTICLE, LOADING_GET_ARTICLE, FAILED_GET_ARTICLE } from '../actions/types';

const initialState = {
  loadingArticle: false,
  articleData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GET_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_GET_ARTICLE:
      return {
        ...state,
        loading: false,
        articleData: action.result,
      };
    case FAILED_GET_ARTICLE:
      return {
        ...state,
        loading: false,
        error: action.errMsg,
      };
    default:
      return state;
  }
};

