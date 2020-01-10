import React, { useState, useEffect } from 'react';
import TopBarProgress from "react-topbar-progress-indicator";

import "./input.css"

const Input = props => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("australian");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
  console.log('useEffect runs');
  console.log(input)
  }, [input, output,language]);

  async function handleChange(event){
    event.preventDefault();
    setInput(event.target.value);
  }

  async function handleLangChange(event){
    event.preventDefault();
    setLanguage(event.target.value);
  }

  async function getTranslate(event){
    event.preventDefault();
    setLoading(true);
    console.log("Getting translation for...", input);
    fetch('https://api.funtranslations.com/translate/' + language + '.json?text=' + input)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not translate!');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      setLoading(false);
      setOutput(data)
    })
    .catch(err => {
      console.log(err);
    });
  }

  TopBarProgress.config({
    barColors: {
      "0": "#ff00ff",
      "1.0": "#ff00ff"
    },
    shadowBlur: 5,
    barThickness: 8
  });

  return (
    <div className = "main">
    <h1>Translate Mate</h1>
    <select className= "select-css" onChange={handleLangChange}>
    <option>Choose</option>
    <option value="australian">Australian</option>
    <option value="minion">Minion</option>
    <option value="pirate">Pirate</option>
    <option value="cockney">Cockney</option>
    <option value="yoda">Yoda</option>
    </select>
    <textarea placeholder = "Write here..." type="text" name="phrase" onChange={handleChange}></textarea>
    <button onClick={getTranslate}>translate</button>
    {loading && <TopBarProgress />}
    {output && (<h2>"{output.contents.translated}"</h2>)}
    </div>
    
  );
  
}

export default Input;