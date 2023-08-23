import React, { Component } from 'react'
import PersonComponent from './Person'
import Button from 'react-bootstrap/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }
  toggle =()=>{
    this.setState({show: !this.state.show})
  }
  
  render() {
    return (
      <div className="App">
        <div></div>
        <Button onClick={this.toggle} variant="success">show profil</Button>
        {this.state.show?<PersonComponent/> :null}
      </div>
    )
  }
}