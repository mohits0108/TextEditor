import React,{useState}from 'react';
//mport styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Textform = (props) => {
  const HandleUpClick=()=>{
    console.log("uppercase was clicked"+Text);
    let newText=Text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upperrcase","success");
  }
  const HandleLoClick=()=>{
    console.log("LowerCase was clicked"+Text);
    let newText=Text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerrcase","success");
  }
  const HandleClearClick=()=>{
    let newText ='';
    setText(newText)
    props.showAlert("textarea is cleard successfully","success");
  }
  const HandleExtraSpaces=()=>{
    let newText =Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed","success");
  }
  
  
  const HandleOnChange=(event)=>{
    setText(event.target.value) 
  }
    const [Text, setText] = useState('')  
    return(
    <> <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={Text} onChange={HandleOnChange} style={{backgroundColor :props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="my-box" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1 my-1' onClick={HandleUpClick} >convert to UpperCase</button>
<button className='btn btn-primary mx-1 my-1' onClick={HandleLoClick} >convert to LowerCase</button>
<button className='btn btn-primary mx-1 my-1' onClick={HandleClearClick} >Clear</button>
<button className='btn btn-primary mx-1 my-1' onClick={HandleExtraSpaces} >Handle Extra Spaces</button>
    </div>;
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {Text.length} charachters</p>
      <p>{ 0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{Text}</p>
      
    </div>
    </>
    )
}

Textform.propTypes = propTypes;
Textform.defaultProps = defaultProps;
// #endregion

export default Textform;