import React from 'react';

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
    <ol>
      {doneTodosToRender}
    </ol>
  )
}

export default DoneList;