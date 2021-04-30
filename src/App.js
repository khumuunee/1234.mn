import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      khailtiinUtga: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((khariu) => khariu.json())
      .then((urdun) => this.setState({ robots: urdun }));
  }

  khailtKhiiyee = (event) => {
    this.setState({ khailtiinUtga: event.target.value });
  };

  render() {
    const { robots, khailtiinUtga } = this.state;
    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(khailtiinUtga)
    );

    return (
      <div className="App">
        <h1>Роботын хайлт байна</h1>
        <SearchBox khailtKhiiye={this.khailtKhiiyee} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
