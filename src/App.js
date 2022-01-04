import React, { Component } from 'react'
import Demo from './components/1_setState'
import A from './components/5_context'
import UseStatesDemo from './components/11_youtube_hooks'
import InputDemo from './components/11_youtube_hooks_2'
import ReducerDemo from './components/11_youtube_hooks_3'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>*setState using class comp</h2>
        <Demo />
        <A />
        <h2>*setState using func comp + useState</h2>
        <UseStatesDemo />
        <h2>InputDemo</h2>
        <InputDemo />
        <h2>ReducerDemo</h2>
        <ReducerDemo />
      </div>
    )
  }
}
