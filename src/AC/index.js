export function selectItem(id, index, selected){
    return{
        type: 'SELECT_ITEM',
        payload: {id, index, selected}
    }
}