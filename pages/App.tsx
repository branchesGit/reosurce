import * as React from 'react'
import Header = require('./Header/Header')
import Menu = require('./Menu/Menu')
import PropTypes from 'prop-types';

class App extends React.Component<any,any>
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        return (
            <div className="main-wrapper">
                <Menu />
                <div className="main-content">
                    <Header />
                    {this.props.children}
                </div>
            </div>
        )
    }   
}

export = App;