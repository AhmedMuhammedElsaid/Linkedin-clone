import React from 'react'
import './InputOption.css'
export default function InputOption({Icon,title,color}) {
    return (
        <div className="input__option">
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}
