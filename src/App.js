import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React Simple CRUD Application",
      datas: [],
      name: "",
      address: "",
    };
  }

  // componentDidMount(){
  //   this.state.formData.focus();
  // }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let data = {name:this.state.name, address:this.state.address}
  
    datas.push(data);

    this.setState({
      datas: datas,
    });

    this.state.name = '';
    this.state.address = '';

  };
  // Delete
  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });
  };

  fEdit = (i) => {
    console.log(i);
    let data = this.state.datas[i];
    console.log(data);
    const {name,address} = data;


  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>

        <form className="myForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="formField"
            value={this.state.name}
            onChange={this.handleOnChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="formField"
            value={this.state.address}
            onChange={this.handleOnChange}
          />

          <button type="submit" className="myButton">
            submit{" "}
          </button>
        </form>
        <pre>
          {datas.map((data, i) => (
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.address}
              <button onClick={() => this.fRemove(i)} className="myListButton">
                remove{" "}
              </button>
              <button onClick={() => this.fEdit(i)} className="myListButton">
                edit{" "}
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default App;
