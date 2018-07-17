import React, { Component } from 'react';
import SelectMenuItem from './SelectMenuItem';

export default class MenuList extends Component{
    render(){
        const {item}=this.props;
        return(
            <div style={{padding: "2%"}}>
                {item.list.map((element,i)=>{return <SelectMenuItem key={i} id={item.id} number={i} element={element} />})}
            </div>
        )
    }
}