import React from 'react';

export default class List extends React.Component {


  render(){
    return(
      <div>
        <ul>{this.props.store.getState().map(task =>{
            return <li>{task.title} <button>Delete</button></li>
          })}
        </ul>
      </div>
    )
  }
}
