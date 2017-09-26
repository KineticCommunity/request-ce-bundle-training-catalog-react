import { List } from 'immutable';

export const types = {
  FETCH_SUBMISSIONS: '@kd/catalog/FETCH_SUBMISSIONS',
  FETCH_NEXT_PAGE: '@kd/catalog/FETCH_NEXT_PAGE',
  FETCH_PREVIOUS_PAGE: '@kd/catalog/FETCH_PREVIOUS_PAGE',
  SET_SUBMISSIONS: '@kd/catalog/SET_SUBMISSIONS',
};

export const actions = {
  fetchSubmissions: coreState =>
    ({ type: types.FETCH_SUBMISSIONS, payload: { coreState } }),
  fetchNextPage: coreState =>
    ({ type: types.FETCH_NEXT_PAGE, payload: { coreState } }),
  fetchPreviousPage: coreState =>
    ({ type: types.FETCH_PREVIOUS_PAGE, payload: { coreState } }),
  setSubmissions: (submissions, nextPageToken) =>
    ({ type: types.SET_SUBMISSIONS, payload: { submissions, nextPageToken } }),
};

export const defaultState = {
  loading: true,
  data: List(),
  // page token tracking
  previous: List(),
  current: null,
  next: null,
};

export const selectByColor = submissions =>
  submissions
    // fileter the Color Select forms out
    .filter(s => s.form.slug === 'color-select')
    // build the count of colors returns an object
    .reduce((acc, submission) =>
      acc.update(submission.values['Select A Color'], colorCount => colorCount + 1),
      Map({ Red: 0, White: 0, Blue: 0, Green: 0 }))
    // format data for the recharts library
    .reduce((acc, v, k) =>
      [...acc, { name: k, count: v }], []);

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_SUBMISSIONS:
      return {
        ...state,
        loading: true,
        previous: List(),
        current: null,
      };
    case types.FETCH_NEXT_PAGE:
      return {
        ...state,
        loading: true,
        previous: state.previous.push(state.current),
        current: state.next,
      };
    case types.FETCH_PREVIOUS_PAGE:
      return {
        ...state,
        loading: true,
        previous: state.previous.pop(),
        current: state.previous.last(),
      };
    case types.SET_SUBMISSIONS:
      return {
        ...state,
        loading: false,
        data: List(action.payload.submissions),
        next: action.payload.nextPageToken,
      };
    default:
      return state;
  }
};

export default reducer;
