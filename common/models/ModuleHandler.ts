
declare var $:any;

import { deserialize } from './ClassUtil'
import Completed = require('./bean/Completed')
import Statistic = require('./bean/Statistic')
import EvaluateInfo = require('./bean/EvaluateInfo')

import { data } from '../../datas/result'
class ModuleHandler
{
    private constructor(){}

    static result:any;

    static _instance:ModuleHandler;

    static getInstance():ModuleHandler
    {
        if( !ModuleHandler._instance )
        {
            ModuleHandler._instance = new ModuleHandler;
        }

        return ModuleHandler._instance;
    }

    getResultInst()
    {
        ModuleHandler.result = data.result;
        var evaluateInfo:EvaluateInfo = this.getClassObj( EvaluateInfo, []);
    }

    recursionObj( obj:any, keys:string[] ) {
        if( obj ) {
            for( var i = 0, l = keys.length; i < l; i++ ) {
                if( !obj ){
                    break;
                } 

                obj = obj[ keys[i] ];
            }
        }

        return obj;
    }

    getClassObj<T>( c: {new():T}, keys:string[] ):T {
        var obj = this.recursionObj( ModuleHandler.result, keys);
        return deserialize( c, obj );
    }

    getClassAray<T>( c: {new():T}, keys:string[] ): T[] {
        var obj = this.recursionObj( ModuleHandler.result, keys );
        var ary:T[] = [];

        if( obj && obj instanceof Array ) {
            for( var i = 0, l = obj.length; i < l; i++ ) {
                 ary.push( deserialize( c, obj[i] ) );
            }
        }

        return ary;
    }
}

export = ModuleHandler;