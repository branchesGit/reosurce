import * as ActionTypes from './CommonActionTypes'

var commonActionMapTemp = {};

let QUERY_REGION_INFO = 'query/regions/infos';
commonActionMapTemp[ActionTypes.QUERY_REGION_INFO] = {
    url: QUERY_REGION_INFO,
    modules: [
        {
            moduleID: '',
            operates: []
        }
    ],
    useMockData: true
}



var commonUrlMapTemp = {};
function handleUrl2ActionID(){
    for( var actionID in commonActionMapTemp ){
        var { url } = commonActionMapTemp[actionID];
        commonUrlMapTemp[url] = actionID;
    }
}

handleUrl2ActionID();

export var commonUrlMap = commonUrlMapTemp;
export var commonActionMap = commonActionMapTemp;

