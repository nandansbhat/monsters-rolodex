import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/card_list/card_list.component";
import { CardList } from "./components/card_list/card_list.component";
import { SearchBox } from "./components/search_box/search_box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
       <SearchBox placeholder = 'Search the text' handleChange = {this.handleChange}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
