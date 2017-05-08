
import * as exCommonFunc from '../../../nicezhuanye_frontend_common/func/commonFunc.js'

declare var hzyCommon: any;
declare var unescape:any;
declare var document:any;

function isDebug() {
    return hzyCommon.isDebug();
}

//获取 loginTypeMap
export function getLoginTypeMap() {
    return exCommonFunc.getLoginTypeMap();
}

export function getValueFromSessionStorage(key, defaultValue){
    return exCommonFunc.getValueFromSessionStorage(key, defaultValue);
}

export function setValueToSessionStorage(key, value){
    exCommonFunc.setValueToSessionStorage(key, value);
}

export function removeSessionStorage(key){
    exCommonFunc.removeSessionStorage(key);
}

export function getValueFromLocalStorage(key, defaultValue){
    return exCommonFunc.getValueFromLocalStorage(key, defaultValue);
}

export function setValueToLocalStorage(key, value){
    exCommonFunc.setValueToLocalStorage(key, value);
}

export function removeLocalStorage(key){
    exCommonFunc.removeLocalStorage(key);
}

export function isEmptyObject( obj ) {
    return exCommonFunc.isEmptyObject( obj );
}

export function isArray(obj){
    return exCommonFunc.isArray(obj);
}

export function isEmptyObjectOrArray(obj){
    return exCommonFunc.isEmptyObjectOrArray(obj);
}


export function assignDataForAjax( obj ) {
    return exCommonFunc.assignDataForAjax( obj );
}

export function assignDataForForm( obj ) {
    return exCommonFunc.assignDataForForm( obj );
}

export function assignAuthCodeForShare(){
    return exCommonFunc.assignAuthCodeForShare();
}

export function clearAnimationCssClass(){
    exCommonFunc.clearAnimationCssClass();
}

export function getUrlFromPropsAndQuery(this_){
    return exCommonFunc.getUrlFromPropsAndQuery(this_);
}

export function debugConsoleLog(msg){
    exCommonFunc.debugConsoleLog(msg);
}

export function getQueryFromRoutes( routesArray , this_){
    return exCommonFunc.getQueryFromRoutes( routesArray , this_);
}

export function getValueInObject(sourceObject, keys, defaultValue?:any){
    return exCommonFunc.getValueInObject(sourceObject, keys, defaultValue);
}

export function deepClone(data){
    return exCommonFunc.deepClone(data);
}

/**
 * 将map object转化为字符串，保证相同object转化为相同string，可以作为key来存储
 * @param obj
 */
export function transformObjectToString(obj){
    return exCommonFunc.transformObjectToString(obj);
}

//将数组改成n个一组[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
export function changeArrayForNewGroup(list,n){
    return exCommonFunc.changeArrayForNewGroup(list,n);
}
//验证数字是否有小数点
export function numberHasPoint(num) {
    return exCommonFunc.numberHasPoint(num);
}

export function isObjectEqual(props, otherProps){
    return exCommonFunc.isObjectEqual(props, otherProps);
}

//table DATA add sequence
export function tableDataAddSequence(tableData){
    if(!isEmptyObjectOrArray(tableData)){
        tableData.forEach(function(item,index){
            var cur = index+1;
            item.sequence = index+1;
            item.key = cur;
        });
        return tableData;
    }else{
        return [];
    }

}

export function isSameProps(newProps, thisProps){
    return transformObjectToString(newProps) == transformObjectToString(thisProps);
}

export function formatDate(time,targetFormat?:string){
    return exCommonFunc.formatDate(time,targetFormat);
}


/**
 *数组去重
 * @param arr
 */
export function uniqueArray(arr){
    var res = [];
    var json = {};
    for(var i = 0; i < arr.length; i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;

}
/**
 * 数组a是否包含数组b，即数组b是数据a的子集
 * @param a
 * @param b
 * @returns {boolean}
 */
export function isContained(a, b){
    if(!(a instanceof Array) || !(b instanceof Array)) return false;
    if(a.length < b.length) return false;
    var aStr = a.toString();
    for(var i = 0, len = b.length; i < len; i++){

        if(aStr.indexOf(b[i]) == -1) return false;
    }
    return true;
}

//页面跳转（dashboard）
 export function request(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     var r = window.location.search.substr(1).match(reg);
     if (r != null) return unescape(r[2]); return null;
 }


export function getStringKey(params: any[]):string{
    let stringKey = "";
    let separator = "_";
    for(let i=0; i<params.length; i++){
        let param = params[i];
        if(this.isObject(param)){
            stringKey = stringKey + separator + transformObjectToString(param);
        }else{
            stringKey = stringKey + separator + JSON.stringify(param);
        }
    }
    return stringKey;
}


export function isObject(value: any): boolean{
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}

/**
 * 获取对象的样式列表
 * 可读取当前对象css 的 样式
 * @param obj
 * @returns {any}
 */
export function getElementStyle(obj){
    var ie = !+"\v1";//简单判断ie6~8
    if(obj.currentStyle){
        return obj.currentStyle;
    }
    else{
        return document.defaultView.getComputedStyle(obj,null);
    }
}