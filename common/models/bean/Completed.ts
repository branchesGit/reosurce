import { JsonProperty } from '../MetadataUtil'

class Completed 
{
    @JsonProperty("total")
    total:number;

    @JsonProperty("choose")
    choose:number;

    constructor()
    {
        this.total = undefined;
        this.choose = undefined;
    }
}

export = Completed;