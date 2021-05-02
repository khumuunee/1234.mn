import React, { Component } from "react";
import "./style.css";

class Surgalt extends Component {
  state = {
    surgalt: null
  };

  componentDidMount = () => {
    const surgaltiinId = this.props.match.params.id.substr(
      this.props.match.params.id.length - 3
    );
    fetch("https://1234.mn/api/courses/" + surgaltiinId)
      //fetch("https://1234.mn/api/courses/80")
      .then((khariu) => khariu.json())
      .then((urdun) => this.setState({ surgalt: urdun[0] }));
  };

  render() {
    return (
      <div className="card-container-surgalt">
        {this.state.surgalt ? (
          <div>
            <img src={this.state.surgalt.zurag} alt="" />
            <h2>{this.state.surgalt.ner}</h2>
            <p>{this.state.surgalt.price}</p>
            <p>{this.state.surgalt.create_date}</p>
            <div
              dangerouslySetInnerHTML={{ __html: this.state.surgalt.tailbar }}
            ></div>
          </div>
        ) : (
          <p>Өгөгдөл татаж байна...</p>
        )}
      </div>
    );
  }
}

export default Surgalt;
