import React, { useState } from 'react'



export default function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted Successfully","Success")

  }
  const handleonChange = (event) => {
    //  console.log(text);
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  const handleClear=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Clear Successfully","Success")
  };

  
  const handleCopy=()=>{
  let text=document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied Successfully","Success")
  }

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#4f2c74'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#4f2c74':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type='button' className="btn btn-primary mx-2" onClick={handleClick}>Convert to UpperCase</button>
        <button disabled={text.length===0}type='button' className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
        <button disabled={text.length===0}type='button' className="btn btn-primary "     onClick={handleCopy}>Copy</button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'#4f2c74'}}>
       <h2>Your Text Summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length } words and {text.length} characters</p>
       <p>{0.008*text.split("").length} Minute to read the above Paragraph</p>
       <h2>Preview</h2>
       <p>{text===""?'Wright something in textbox to see preview':text}</p>
      </div>
    </>


  )
}
