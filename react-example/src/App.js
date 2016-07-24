import React, { Component } from 'react'
import './App.css'
import AnimateMenu from './AnimateMenu'
import InlineEdit from './InlineEdit'

class App extends Component {
  render () {
    return (
      <div>
        <h2> Example 1 </h2>
        <InlineEdit />
        <hr />
        <h2> Example 2 </h2>
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
      </div>
    )
  }
}

export default App
