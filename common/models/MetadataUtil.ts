import 'reflect-metadata';

export function getClazz( target:any, propertyKey:string ){
    return Reflect.getMetadata("design:type", target, propertyKey );
}

const JSONPROPERTY = 'JsonProperty'

interface iClazz {
    name?:string;
    clazz?:any;
};

//Typescript编译器可以通过@Reflect.metadata装饰器注入设计阶段的类型
//信息。
export  function JsonProperty( metadata:string|iClazz ) {
    if( typeof metadata === 'string' ) {
        metadata = {
            name: metadata,
            clazz:undefined
        }
    }

    return Reflect.metadata( JSONPROPERTY, metadata );
}

export function getJsonProperty( target: any, propertyKey: string ) {
    return Reflect.getMetadata( JSONPROPERTY, target, propertyKey );
}