import React, { useState, Component } from 'react';
import './change_button.css';

class ChangeButton extends Component{
    constructor(props){
        super(props);
        this.state={
            btnTxt:'哈哈'
        }
    }

    render(){
        const {btnTxt}=this.state;
        return(
            <div className='button-container' onClick={()=>{ this.setState({btnTxt:btnTxt==='哈哈'?'嘻嘻':'哈哈'})}}>
                <span>{btnTxt}</span>
            </div>
        )
    }
}

export default ChangeButton;