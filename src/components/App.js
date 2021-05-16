import React, {Component, useEffect, useState} from "react";

import '../styles/App.css';

const App = (props) => {
  const [getTitle,setTitle] = useState(props.slides[0].title);
  const [getText,setText] = useState(props.slides[0].text);
  const [getIndex,setIndex] = useState(0);
  const [getDisable,setDisable] = useState(false);
  const [getDisable2,setDisable2] = useState(true);
  
  useEffect(()=>{
      display();
  },[getIndex]);

  const nextSlide = (e)=>{
          setDisable2(false);
          let index = getIndex;
          index++;
          if(getIndex>props.slides.length-3){
            setDisable(true);
          }
          console.log(getIndex);
          setIndex(index);

  }
  
  const prevSlide = (e)=>{
    setDisable(false);
    let index = getIndex;
    index--;
    if(getIndex===1){
      setDisable2(true);
    }
    console.log(getIndex);
    setIndex(index);

}

  function display(){
       setTitle(props.slides[getIndex].title);
       setText(props.slides[getIndex].text);
  }

  const reStart = ()=>{
     setDisable2(true);
     setDisable(false);
     setIndex(0);
  }


  return (
      <>
        

        <h1 data-testid="title">{getTitle}</h1>
        <p data-testid="text">{getText}</p>
        <button data-testid="button-prev" disabled={getDisable2} onClick={prevSlide}>Prev</button>
        <button data-testid="button-next" disabled={getDisable} onClick={nextSlide}>Next</button>
        <button data-testid="button-restart" onClick={reStart}>Restart</button>

      </>
  )
}


export default App;
