import actionTypes from "../constants"
import { HYDRATE } from 'next-redux-wrapper'


const initialState = {
    data: []
  }

  function fetchDataReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
      case actionTypes.SAVE_FETCHED_DATA:
        return {
          ...state,
          ...{ data: action.payload },
        }
      default:
        return state
    }
  }

  export default fetchDataReducer;