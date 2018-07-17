import { OrderedMap, Record, List, fromJS } from 'immutable';

const ReducerState=Record({
    entities:fromJS([{},{},{},{}])
    //entities:new OrderedMap({})
});

const defaultState=new ReducerState();

export default (adminSelectMenu=defaultState, action)=>{
    const {type, payload}=action;

    switch(type){
        //case('SELECT_ITEM'): return adminSelectMenu.setIn(['entities', payload.id, 'list', payload.index], payload.selected)
        case('SELECT_ITEM'): return adminSelectMenu.setIn(['entities', payload.id-1, 'id'], payload.id)
                                                    .setIn(['entities', payload.id-1, 'list', payload.index], payload.selected)
    }
    return adminSelectMenu;
}