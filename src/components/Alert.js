import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const x = word.toLowerCase()
        return x.charAt(0).toUpperCase() + x.slice(1);
    }

  return (
    // using "props.alert &&" because it handles the null value, suppose props value of alert is null initially, then 
    // we get error due to null. But when "props.alert &&" is used then it handles the null and if not null then after && 
    // handles the case......
    <div style={{height:"50px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}: </strong>{props.alert.message}
      </div>}
    </div>
  )
}
