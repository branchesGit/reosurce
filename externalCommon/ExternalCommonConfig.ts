
import {translateUrlMapKey} from "./privilege/ActionInfoUtil";

import {commonUrlMap,  commonActionMap} from "../actions/ResourceCommon/CommonActionMap";
import { commonMockTemplate } from "../actions/ResourceCommon/CommonMockTemplate";


//actionID ---> template of data.
export const allTemplateMap = {
    commonMockTemplate
};

//url -->actionID;
export const allUrlMap = {
    commonUrlMap: translateUrlMapKey(commonUrlMap),
  
};

//actionID --->basicActionIDInfo
export const allActionMap = {
    commonActionMap
};

export const GlobalDatasource = "GlobalForceUseMockData"; //GlobalForceToUseRealData|GlobalUseComponentData|GlobalForceUseMockData;
