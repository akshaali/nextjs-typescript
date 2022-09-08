import actionTypes from "../Constants";

export const fetchData = () => {
    return {type: actionTypes.FETCH_POST_DATA}
}

export const saveData = (payload: Array<any>) => {
    return {type: actionTypes.SAVE_FETCHED_DATA, payload }
}