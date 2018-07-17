import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {toJS} from 'immutable';
import { selectItem } from '../AC';

class SelectMenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            img: this.props.element.dish[0].src,
            text: ''
        }
    }

    handleSelected=(ev)=>{
        const {element, id, number, selectItem} = this.props;
        const index = ev.target.selectedIndex;
        this.setState({img: element.dish[index].src, text: ev.target.value});
        selectItem(id, number, {img: element.dish[index].src, text: ev.target.value})
    }

    render(){
        const {element, adminMenu}=this.props;
        console.log(adminMenu.toJS().entities)
        return(
            <div>
                <img alt="img" src={this.state.img} />
                <FormControl style={{width: "70%", height: "30px"}}>
                    <Select
                        native
                        value={this.state.text}
                        onChange={this.handleSelected}
                    >
                        {element.dish.map((item,i)=>{
                            return <option key={i} value={item.text}>{item.text}</option>
                        })}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        adminMenu:state.adminSelectMenu
    }
}

export default connect(mapStateToProps, {selectItem})(SelectMenuItem)