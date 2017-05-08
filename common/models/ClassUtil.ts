import { getJsonProperty } from './MetadataUtil'

export function deserialize<T>( clazz: { new(): T}, jsonObj:any ):T {
    let obj:any = new clazz();

    Object.keys( obj ).forEach( ( property ) => {
        let propertyMetadataFn = function( jsonPropertyMetadata:any ) {
            let metadataName = jsonPropertyMetadata.name;
            let metadataClazz = jsonPropertyMetadata.clazz;

            if( metadataClazz ) {
                var childJsonObj = jsonObj[ metadataName ];
                
                if( childJsonObj &&  childJsonObj instanceof Array ) {
                    return childJsonObj.map( (json,idx) => {
                       return deserialize( metadataClazz, json)
                    } );
                } else {
                    return deserialize( metadataClazz, childJsonObj )
                }
                
            } else if( metadataName ) {
                return jsonObj[ metadataName ];
            }
        };

        var jsonPropertyMetadata = getJsonProperty( obj, property );

        if( jsonPropertyMetadata ) {
            //属性装饰器
            obj[ property ] =  propertyMetadataFn( jsonPropertyMetadata ) ;
        
        } else {
            // just to assign value.
            obj[ property ] = jsonObj[ property ];
        }
    } )

    return obj;
}