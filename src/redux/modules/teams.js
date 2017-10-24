export const types = {
  FETCH_TEAMS: '@kd/catalog/FETCH_TEAMS',
  SET_TEAMS: '@kd/catalog/SET_TEAMS',
};

export const actions = {
  fetchTeams: () => ({ type: types.FETCH_TEAMS }),
  setTeams: teams => ({ type: types.SET_TEAMS, payload: teams }),
};

export const defaultState = {
  loading: true,
  errors: [],
  data: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS:
      return { ...state, loading: true, errors: [] };
    case types.SET_TEAMS:
      return { ...state, loading: false, errors: [], data: action.payload };
    default:
      return state;
  }
};

export default reducer;
