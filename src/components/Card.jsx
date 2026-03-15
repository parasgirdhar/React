import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props.company)
  return (
    <>
      
<div className="card">
<div className="top">

<img src={props.brandLogo} alt="" />
<button>save <Bookmark  size={10}/> </button>
</div>

<div className="centre">

<div><h3>{props.company} <span>{props.date}</span> </h3>
  <h2>{props.post}</h2></div>
<div><button id='centre-button-1'>{props.tag1}</button>
<button id='centre-button-2' >{props.tag2}</button>
</div>
</div>

<div className="bottom">

<div><h4>{props.pay}</h4>
<p> {props.location}</p></div>
 <div><button>Apply Now</button></div>
</div>
</div>
   

    </>
  )
}

export default Card
