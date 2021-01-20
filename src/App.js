import React, { Component } from 'react'

export default class App extends Component {

  onChangeH = (e)=>{
    console.log("Contact");
    e.target.innerHTML= "bouuuhhouhhh";
}
onChangeP = ()=>{
  
  document.querySelector(".onChange").innerHTML= "Article non disponible";
}
onChangeI = (e)=>{
  
   document.querySelector(".onChangeI").innerHTML= e.target.value;
  console.log(e.target.value);
}
onChangeII = (e)=>{
  
  document.querySelector(".onChangeII").innerHTML= document.querySelector(".onChangeIIVal").value;
  console.log(e.target.value);
}

  render() {
    return (
      <div>
        <h1 onClick={this.onChangeH}>Mon h1</h1>
        <p className="onChange">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam voluptate porro voluptatibus assumenda commodi iure, numquam, dolores, ipsam laboriosam tempore neque ea minima quas! Eligendi eum aliquam explicabo ea.</p>
        <button onClick={this.onChangeP}>change le paragraphe</button>
        <h1>Mon deuxième H1</h1>
        <p className="onChangeI">CHANGE MON TEXT</p>
        <input type="text" onChange={this.onChangeI}/>

        <h1>Mon troisième H1</h1>
        <p className="onChangeII">CHANGE MON TEXT</p>
        <input className="onChangeIIVal" type="text"/>
        <button onClick={this.onChangeII}>CHANGEZ!</button>
      </div>
    )
  }
}
