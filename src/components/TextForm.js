import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UPPERCASE was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick = () =>{
      //console.log("UPPERCASE was clicked" + text);
      let newtext = text.toLowerCase();
      setText(newtext);
    }
    const handleclearClick = () =>{
      //console.log("UPPERCASE was clicked" + text);
      let newtext = '';
      setText(newtext);
    }
    const handlesaveClick = () =>{
      //console.log("UPPERCASE was clicked" + text);
      let newtext = text.trimStart;
      setText(newtext);
    }
    const copyText = () => {
      navigator.clipboard.writeText(text);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    
    const handleOnchange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
      
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlesaveClick}>Save as Word</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
        
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}
