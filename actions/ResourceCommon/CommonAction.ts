import * as ActionTypes from './CommonActionTypes'

function handleChangeRegionInfo( ) {

    return {
        type: ActionTypes.CHANGE_REGION_INFO,
        mergeState: { a: 1}
    }
}

var actions = { handleChangeRegionInfo };

export = actions;