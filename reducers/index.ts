import { combineReducers } from 'redux'
import CommonActionState = require('../actions/ResourceCommon/CommonActionState')

const rootReducers = combineReducers({
    commonState: CommonActionState.getInstance().handleReducers,
});

export default rootReducers;