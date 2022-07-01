import { initialState } from "../state/colorValues";

export const colorRdeucer = (state = initialState, action) => {
  if (action.type === "TOGGLE") {
    return {
      ...state,
      isLight: !state.isLight,
    };
  } else {
    return state;
  }
};
