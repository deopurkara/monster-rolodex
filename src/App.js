import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      seacrhField: ''
    }
    // bind() function binds this object with the function called
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick2 = this.handleClick1.bind(this);
  }


  //load data from remote point
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) //converts code into json format so that browser can understand the js 
    .then(users=> this.setState({monsters : users})) //inserted the dat into monster array
  }

  handleChange = e => {
    //function declaration
    this.setState({seacrhField: e.target.value})
    // console.log(this);
  }

  // handleClick1(){
  //   console.log("button 1 clicked");
  // }
  //Following is nice way, arrow function
  // handleClick3 = () => console.log('button 3 clicked');

  render(){
    const { monsters, seacrhField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(seacrhField.toLowerCase()));


      // monsters.filter(function(monster){
      //   return monster.name.toLowerCase().includes(seacrhField.toLowerCase());
      //   helloworld he
      // });

    return(
    // <div>
    //   <button onClick={this.handleClick1()}>click1</button>
    //   <button onClick={this.handleClick1}>click2</button>
    //   <button onClick={this.handleClick2}>click3</button>
    //   <button onClick={this.handleClick3}>click4</button>
    // </div>
      <div className="App">
        <h1>Monster Rolodex</h1>
          <SearchBox 
            placeholder="Search Monster"
            handleChange = {this.handleChange}
          />
        <CardList monsters={filteredMonsters} / > 
    </div>
    )
  }
}

export default App;
