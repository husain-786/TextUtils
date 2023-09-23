import React, { useState } from 'react'

// export default function About({mode}) {  // using this syntax we can access directly without using keyword props......
export default function About(props) {
// *************************************************************************************************************
// The style of About.js is not being used here because to toggle between the dark mode and light mode I am sending the props.style state from App.js......

    
  return (
    <div className='container' style={props.style}>
        <div className="accordion" id="accordionExample" style={props.style}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" style={props.style} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, charater count, converting to upper case, 
                    converting to lower case, clear field, copying text, and remove extra spaces. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"  style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={props.style} data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    TextUtil is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils 
                    reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={props.style}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={props.style}>
                    This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters 
                    in facebook, blog, books, excel documents, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-5">
         <button type="button" className="btn btn-outline-primary" onClick={changeDarkAndLightMode}>{btnText}</button>
        </div> */}
    </div>
  )
}
