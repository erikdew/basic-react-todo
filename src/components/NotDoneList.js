import React from 'react';

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
    <ol>
      {notDoneTodosToRender}
    </ol>
  )
}

export default NotDoneList;