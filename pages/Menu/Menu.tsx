import * as React from 'react'
import { MenuConfig } from '../../common/config/MenuConfig'
import {  Select } from 'antd'
import ItemActions = require('../../actions/ResourceCommon/CommonAction')
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDataByActionIDWithQueryAsync } from '../../externalCommon/ajax/AjaxUtil'
import * as ActionTypes from '../../actions/ResourceCommon/CommonActionTypes'

const Option = Select.Option;

const REGION_LIST = [
    {
        regionID: 3,
        regionName: "海南省"
    },
    {
        regionID: 5,
        regionName: "海口市"
    }
];

class Menu extends React.Component<any,any>
{
    constructor( props )
    {
        super( props );

        this.state = {};
        this.handleChangeRegion = this.handleChangeRegion.bind( this );
    }

    componentWillMount()
    {
        var regionInfo = REGION_LIST[0];

        this.setState({regionID: regionInfo.regionID + ""});

        this.queryRegion();
    }

    queryRegion()
    {
        var success = function( data ) {
            console.log( data );

        }, fail = function() {

        };

        getDataByActionIDWithQueryAsync( ActionTypes.QUERY_REGION_INFO, {}, success, fail, fail )
    }

    getMenuList()
    {
        var i = 0, len = MenuConfig && MenuConfig.length || 0;
        var lis;

        for( ; i < len; i++ )
        {
            lis = MenuConfig.map( (menuInfo,idx) => {
                var { displayName, link, className } = menuInfo;

                return <li key={idx}>{displayName}</li>
            })    
        }

        return lis ? <ul className="res-menu">{lis}</ul> : "";
    }

    handleChangeRegion( regionID )
    {
        this.setState({regionID});

        var { actions } = this.props;
        actions.handleChangeRegionInfo();

    }

    render()
    {
        return (
            <div className="menu-wrapper">
                <Select value={this.state.regionID} onChange={this.handleChangeRegion}>
                {
                    REGION_LIST.map( ( regionInfo,idx ) => (
                        <Option value={regionInfo.regionID + ""} key={idx}>{regionInfo.regionName}</Option>
                    ) )
                }
                </Select>
                {this.getMenuList()}
            </div>
        )
    }
}

export = connect( 
    state => ({}),
    dispatch => ({
        actions: bindActionCreators( ItemActions,dispatch )
    }) 
)(Menu);