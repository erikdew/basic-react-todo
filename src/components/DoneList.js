import React, { Component } from 'react';

const DoneList = (props) => {
  const doneTodosToRender = props.list.map((element, index) => {
    return (
      <li key={index}>
        {element.todo}
        &nbsp;
        <button onClick={() => props.undo(index)}>undo</button>
      </li>
    )
  })
  return (
    <ul>
      {doneTodosToRender}
    </ul>
  )
}

export default DoneList;