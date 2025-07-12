import React from 'react'
import Child from './child'

function Parent() {

    var parentname = "Mukesh"

  return (
    <div>
        <h1>Hi i am parent</h1>
        <Child parentname={parentname}/>
    </div>
  )
}

export default Parent