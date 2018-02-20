/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LaunchActions from '../Redux/LaunchRedux'
// import { LaunchSelectors } from '../Redux/LaunchRedux'

export function * login (api, action) {
  const { phone, password } = action
  // get current data from Store
  // const currentData = yield select(LaunchSelectors.getData)
  // make the call to the api
  const response = yield call(api.login, { phone, password })
  // success?
  if (!response.error) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    console.log(`response: ${response}`)
    yield put(LaunchActions.loginSuccess(response))
  } else {
    yield put(LaunchActions.loginFailure(response.error))
  }
}
