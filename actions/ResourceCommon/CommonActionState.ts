import * as Immutable from 'immutable'
import * as ActionTypes from './CommonActionTypes'

class CommonActionState
{
    private constructor(){}

    private static _instance:CommonActionState;

    static getInstance():CommonActionState
    {
        if( !CommonActionState._instance )
        {
            CommonActionState._instance = new CommonActionState();
        }

        return CommonActionState._instance;
    }

    treeState = Immutable.Map({});

    handleReducers = ( state:any, actionInfo ) => {
        if( !state ) {
            state = this.treeState;
        }

        switch( actionInfo.type ) {
            case ActionTypes.CHANGE_REGION_INFO :
                this.treeState = state.merge( actionInfo.mergeState );
        }

        return this.treeState;
    }

}

export = CommonActionState;