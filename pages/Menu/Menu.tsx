import * as React from 'react'
import { MenuConfig } from '../../common/config/MenuConfig'
import { Anchor, Select } from 'antd'
import ItemActions = require('../../actions/ResourceCommon/CommonAction')
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Link = Anchor.Link;

const REGION_LIST = [
    {
        regionID: 32,
        regionName: '海南省',
    },
    {
        regionID: 35,
        regionName: '海口市'
    }
];

const Option = Select.Option;

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
    }

    getMenuList()
    {
        var i = 0, len = MenuConfig && MenuConfig.length || 0;
        var lis;

        for( ; i < len; i++ )
        {
            lis = MenuConfig.map( (menuInfo,idx) => {
                var { displayName, link, className } = menuInfo;

                return <Link  key={idx} href={link} title={displayName} />
            })    
        }

        return lis ? <Anchor className="res-menu">{lis}</Anchor> : "";
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