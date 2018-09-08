import React, { Component } from 'react';

const NotDoneList = (props) => {
  const notDoneTodosToRender = props.list.map((element, index) => {
    return (
      <li key={index}>
        {element.todo}
        &nbsp;
        <button onClick={() => props.complete(index)}>complete todo</button>
      </li>
    )
  })
  return (
    <ul>
      {notDoneTodosToRender}
    </ul>
  )
}

export default NotDoneList;