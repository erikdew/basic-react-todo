import React, { Component } from 'react';
import './App.css';
import NotDoneList from './components/NotDoneList';
import DoneList from './components/DoneList';

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputString: "",
      doneTodoList: [],
      notDoneTodoList: [],
    }
  }

  handleChange = (event) => {
    this.setState({
      inputString: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      notDoneTodoList: [
        ...this.state.notDoneTodoList,
        {
          todo: this.state.inputString,
        }
      ],
      inputString: "",
    })
  }

  handleCompleteTodo = (index) => {
    const newNotDoneTodoList = this.state.notDoneTodoList.slice();
    const removed = newNotDoneTodoList.splice(index, 1);

    this.setState({
      notDoneTodoList: [...newNotDoneTodoList],
      doneTodoList: [...this.state.doneTodoList, ...removed]
    })
  }

  handleUndo = (index) => {
    const newDoneTodoList = this.state.doneTodoList.slice();
    const removed = newDoneTodoList.splice(index, 1);

    this.setState({
      notDoneTodoList: [...this.state.notDoneTodoList, ...removed],
      doneTodoList: [...newDoneTodoList]
    })
  }

  handleKeyPress = (event) => {
    if(event.key === "Enter") {
      this.setState({
        notDoneTodoList: [
          ...this.state.notDoneTodoList,
          {
            todo: this.state.inputString,
          }
        ],
        inputString: "",
      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <div style={styles.container}>
        <div>
          <input onKeyPress={this.handleKeyPress} value={this.state.inputString} onChange={this.handleChange} type="text"/>
          <button onClick={this.handleSubmit}>Add to list</button>
        </div>
        <h2>Not Done</h2>
        <NotDoneList list={this.state.notDoneTodoList} complete={this.handleCompleteTodo} />
        <h2>Done</h2>
        <DoneList list={this.state.doneTodoList} undo={this.handleUndo} />
      </div>
    );
  }
}

export default App;
