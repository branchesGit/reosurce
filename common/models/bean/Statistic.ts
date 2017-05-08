import { JsonProperty } from '../MetadataUtil'

class Statistic
{
    @JsonProperty("id")
    id:string;

    @JsonProperty("name")
    name:string;

    @JsonProperty("num")
    count:number;

    constructor( )
    {
        this.id = undefined;
        this.name = undefined;
        this.count = undefined;
    }
}

export = Statistic;