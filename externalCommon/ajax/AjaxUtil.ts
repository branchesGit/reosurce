
import * as exCommonAjaxUtil from '../../../nicezhuanye_frontend_common/ajax/AjaxUtil.js'
import {allActionMap, GlobalDatasource} from "../ExternalCommonConfig";
import {getActionInfo} from "../privilege/ActionInfoUtil";
import {mockDataByUrl} from "../mock/MockUtil";
import {baseUrl} from "../const/CommonVar";


export function exportClassFileByActionID(form, exportActionID, showFilename, query, methodName){
    exCommonAjaxUtil.exportClassFileByActionID(form, exportActionID, showFilename, query, allActionMap, methodName,baseUrl)
}

/**
 * 导出文件
 * @param form 表单元素
 * @param exportActionID
 * @param showFilename
 * @param query target或其他参数
 */
export function exportFileByActionID(form, exportActionID, showFilename, query) {
    exCommonAjaxUtil.exportFileByActionID(form, exportActionID, showFilename, query, allActionMap,baseUrl)
}

function isUseMockData(actionID, allActionMap){
    return exCommonAjaxUtil.isUseMockData(actionID, GlobalDatasource, allActionMap)
}

function mockDataIfRequired(actionID){
    
    if (isUseMockData(actionID, allActionMap)) {
        mockDataByUrl(getActionInfo(actionID).url);
    }
}
/**
 *  异步请求 必须传递successFunc
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDAsync(actionID, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {

    mockDataIfRequired(actionID);

    exCommonAjaxUtil.getDataByActionIDAsync(actionID, successFunc, failFunc, errorFunc, allActionMap,baseUrl)
}

/**
 * 异步请求 带参数 必须传递successFunc
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDWithQueryAsync(actionID, queryObj, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {
    mockDataIfRequired(actionID);
    exCommonAjaxUtil.getDataByActionIDWithQueryAsync(actionID, queryObj, successFunc, failFunc, errorFunc, allActionMap,baseUrl)
}

/**
 * 同步请求
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {any}
 */
export function getDataByActionID(actionID: string, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {
    mockDataIfRequired(actionID);
    return exCommonAjaxUtil.getDataByActionID(actionID, successFunc, failFunc, errorFunc, allActionMap,baseUrl);
}

/**
 * 同步带参请求
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {{}}
 */
export function getDataByActionIDWithQuery(actionID, queryObj, successFunc?: Function, failFunc?: Function, errorFunc?: Function) {
    mockDataIfRequired(actionID);
    return exCommonAjaxUtil.getDataByActionIDWithQuery(actionID, queryObj, successFunc, failFunc, errorFunc, allActionMap,baseUrl);
}

/**
 * 从缓存中获取结果，如果缓存中没有，发起ajax，然后将结果放入缓存
 * 缓存的key 是actionID 如果queryObj不为空，将其序列化后，以下划线链接
 */
export function getDataFromContextByActionID(contextArray, actionID, queryObj) {
    mockDataIfRequired(actionID);
    return exCommonAjaxUtil.getDataFromContextByActionID(contextArray, actionID, queryObj, allActionMap,baseUrl);
}

export function getDataFromContextByActionIDAsync(contextArray, actionID, successFunc, queryObj) {
    mockDataIfRequired(actionID);
    exCommonAjaxUtil.getDataFromContextByActionIDAsync(contextArray, actionID, successFunc, queryObj, allActionMap,baseUrl);
}