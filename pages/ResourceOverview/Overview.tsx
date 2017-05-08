import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ItemActios from '../../actions/ResourceCommon/CommonAction'

class Overview extends React.Component<any,any>
{
    constructor( props )
    {
        super( props );
    }

    componentWillReceiveProps( newProps )
    {
        var { commonState } = newProps;
        commonState = commonState.toJS();

        console.log( commonState );
    }

    render()
    {
        return (
            <div>
                <div className="block" >
                    <a id="complete-info">completed</a>
                </div>
                <div className="block" >
                    <a id="art-science-analysis">co文理分析mpleted</a>
                </div>
                <div className="block" >
                    <a id="teacher-resource-evaluate">师资资源评估</a>
                </div>
                <div className="block" >
                    <a id="tc-evaluate">走班方式评估</a>
                </div>
                <div className="block" >
                    <a id="industry-prediction">行业人才预测</a>
                </div>
            </div>
        )
    }
}


export = connect( 
    state => ( {commonState: state.commonState} )
)( Overview );