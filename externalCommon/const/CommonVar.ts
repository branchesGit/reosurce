
import * as exCommonVar from '../../../nicezhuanye_frontend_common/const/commonVar.js'

export const serverIP = exCommonVar.serverIP;

export const debug = exCommonVar.debug;

export const console = exCommonVar.console;

export function isDebug(){
    return exCommonVar.isDebug();
}


// todo
export const dashboardBaseUrl =  'http://' + window.location.host  + '/Nicezhuanye';//

//need change.
export const baseUrl = 'http://' + serverIP + ':8888/schedulerserv';//

export const currentVersion = exCommonVar.currentVersion;

export const uploadUrl = baseUrl+ '/upload/uploadFile';


export const restBaseURL = exCommonVar.restBaseURL;

export const platformManageURL = baseUrl+"/platformManage";

//hot line number
export const hotLine = exCommonVar.hotLine;

export const downloadTemplateURL = 'http://' + serverIP +"/NicezhuanyeFile/CourseTemplate.xls"
