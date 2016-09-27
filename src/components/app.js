import React from 'react';

import Input from './input';
import List from './list';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <List store ={this.props.store}/>
        <Input store={this.props.store}/>
      </div>
    )
  }
}
