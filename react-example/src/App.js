import React, { Component } from 'react'
import './App.css'
import AnimateMenu from './AnimateMenu'

class App extends Component {
  render () {
    return (
      <AnimateMenu
       items={
         [
           'Home',
           'Posts',
           'About',
           'Contact'
         ]
       }
      />
    )
  }
}

export default App
