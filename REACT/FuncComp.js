import React, { Component } from 'react'

function FuncComp(props){
    console.log(props)
    let className = props.apply ? 'heading': '';
    let inline ={
        color:'red',
        fontSize:'200px'
    }
    return(
        <div>
            <h1 stylee={inline}>welcome to mru{props.city},{props.state},{props.childern}</h1>
        </div>
    )
}