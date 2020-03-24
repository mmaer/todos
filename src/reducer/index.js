import ACTIONS from "./actionTypes";

const reducer = (state, action) => ACTIONS[action.type](state, action);

export default reducer;
