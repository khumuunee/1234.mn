import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      surgaltuud: [],
      khailtiinUtga: ""
    };
  }

  componentDidMount() {
    fetch("https://1234.mn/api/courses")
      .then((khariu) => khariu.json())
      .then((urdun) => this.setState({ surgaltuud: urdun }));
  }

  khailtKhiiyee = (event) => {
    this.setState({ khailtiinUtga: event.target.value });
  };

  render() {
    const { surgaltuud, khailtiinUtga } = this.state;
    const filteredsurgaltuud = surgaltuud.filter((el) =>
      el.ner.toLowerCase().includes(khailtiinUtga)
    );

    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Нүүр</Link>
          <Switch>
            <Route path="/course/:id" render={() => <h1>Turshij baina</h1>} />
            <Route path="/">
              <h1>1234.mn сургалтууд</h1>
              <SearchBox khailtKhiiye={this.khailtKhiiyee} />
              <CardList surgaltuud={filteredsurgaltuud} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
