import React from 'react';

export default class Input extends React.Component {

  formHandler(event){
    event.preventDefault()
    let inputValue = event.target.children[0].value
    let action = {type: 'ADD_TODO', payload: {title: inputValue}}
    document.getElementById('new_task').value = ""
    this.props.store.dispatch(action)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.formHandler.bind(this)}>
          <input id='new_task'type='text' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
