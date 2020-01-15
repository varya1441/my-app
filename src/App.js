import React, { Component } from 'react'
import './App.css'

const TestComponent = () => <p>просто render</p>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TestComponent
          data={'fake-data'}
          anotherData={'fake-data-2'}
          veryLongLineHere={'yes'}
        />
      </div>
    )
  }
}

export default App
