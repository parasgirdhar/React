import React, { useState } from 'react'
<link rel="stylesheet" href="App.css" />

const App = () => {

const [user, setuser] = useState(0)
// const [count, setcount] = useState()


function increment(){
  setuser(user+1)
}

function decre(){
  setuser(user-1)
}


  return (
    <div>
      
<button  onClick={increment} >+
</button>


<h1>{user}</h1>

<button  onClick={decre}>-</button>

    </div>
  )
}

export default App
