import * as React from 'react'

class Header extends React.Component<any,any>
{
    constructor( props )
    {
        super( props )
    }

    render()
    {
        return (
            <div className="header">
                <div className="">
                    <i className="logo"/>
                </div>
                <div>
                    欢迎你：
                </div>
            </div>
        )
    }
}

export = Header;