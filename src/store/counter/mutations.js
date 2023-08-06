export const increment = (state) => {
  state.count += 1;
  state.lastMutation = "increment";
};
export const incrementBy = (state, value) => {
  state.count += value;
  state.lastMutation = "incrementBy";
};
export const setLoading = (state, value) => {
  state.isLoading = value;
  state.lastMutation = "setLoading " + value;
};
