import { takeLatest, all, takeEvery } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { LaunchTypes } from '../Redux/LaunchRedux'

/* ------------- Sagas ------------- */
import { login } from './LaunchSagas'

/* ------------- API ------------- */
import LaunchApi from '../Services/LaunchApi'

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const launchApi = LaunchApi.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeEvery(LaunchTypes.LOGIN_REQUEST, login, launchApi)
  ])
}
