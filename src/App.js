import React, { Component } from 'react';
import Header from './components/Header';

export class App extends Component {
  state = {
    title: 'Owlfinity employees',
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
      </div>
    )
  }
}

export default App