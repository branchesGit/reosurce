import * as ActionTypes from './CommonActionTypes'

let commonMockTemplateTemp = {};


commonMockTemplateTemp[ ActionTypes.QUERY_REGION_INFO ] = {
    "status": "success",
    "code": 0,
    "result": [
        {
            "regionID": 3,
            "regionName": "海南省"
        },
        {
            "regionID": 5,
            "regionName": "海口市"
        }
    ]
}


export var commonMockTemplate = commonMockTemplateTemp;