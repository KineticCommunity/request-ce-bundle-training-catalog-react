import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { CoreAPI } from 'react-kinetic-core';

import { actions, types } from '../modules/teams';

export function* fetchTeamsSaga() {
  const { teams } =
    yield call(CoreAPI.fetchTeams);

  yield put(actions.setTeams(teams));
}

export function* watchTeams() {
  yield takeEvery(types.FETCH_TEAMS, fetchTeamsSaga);
}
