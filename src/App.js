import React, { useState } from "react";
import "./styles.css";

export default function App() {


  return (
    <div className="App">
      <h1>WhatMusic</h1>
      <p style = {{fontSize:"larger"}}>My Recommended Music List is Here, select a Genre to get started.</p>
      <button style = {{padding:"0.5rem", width:"6rem", margin:"1rem", borderRadius:"0.5rem", border:"1px solid black", cursor:"pointer"}} >Pop</button>
       <button style = {{padding:"0.5rem", width:"6rem", margin:"1rem", borderRadius:"0.5rem", border:"1px solid black", cursor:"pointer"}} >Rap</button>
        <button style = {{padding:"0.5rem", width:"6rem", margin:"1rem", borderRadius:"0.5rem", border:"1px solid black", cursor:"pointer"}} >Indie</button>
        <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>
    </div>
  );
}
