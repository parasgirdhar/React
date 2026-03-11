import React from 'react'

const App = () => {

function  pagescrolling (elem){
if(elem>0){
  console.log("sedha scrolling")
}
else{
  console.log("ulta scrolling")
}

}

  return (

    <div>
      <div  onWheel={function(elem){
pagescrolling(elem.deltaY)                      //  sedha scrolling and ulta scrolling speed count....
      }} >


<div className='page1' ></div>
<div className='page2'></div>
</div>
    </div>
  )
}

export default App
