import { JsonProperty } from '../MetadataUtil'
import Completed = require('./Completed')
import Statistics = require('./Statistic')

class EvaluateInfo
{
    @JsonProperty({name:"totalCompleted",clazz:Completed})
    completeInfo:Completed;

    @JsonProperty({name:"statistics",clazz:Statistics})
    statistics:Statistics[];


    constructor()
    {
        this.completeInfo = null;
        this.statistics = null;
    }
}

export = EvaluateInfo;