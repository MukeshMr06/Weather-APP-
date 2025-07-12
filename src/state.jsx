import React from 'react'
import { useState } from 'react'

function State() {

    const [count,setCount] = useState(0)

    function add(){
        setCount(Math.floor(Math.random()*10)+1)
    }
  
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={add}>Add random </button>
           
        </div>
    )
}

export default State