import Parse from 'parse/react-native'
import { AsyncStorage } from 'react-native'

const APP_ID = 'project-auto'
// const CLIENT_KEY = 'clientKey'
const JAVASCRIPT_KEY = 'javascriptKey'
const API_URL = 'http://192.168.10.54:1337/parse'

Parse.initialize(APP_ID, JAVASCRIPT_KEY)
Parse.serverURL = API_URL
Parse.setAsyncStorage(AsyncStorage)

export default Parse;
