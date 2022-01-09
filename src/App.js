import React, { Component } from 'react'
import Demo from './components/1_setState'
import A from './components/5_context'
import UseStatesDemo from './components/11_youtube_hooks'
import InputDemo from './components/11_youtube_hooks_2'
import ReducerDemo from './components/11_youtube_hooks_3'
import UseStateCountDemo from './components/11_youtube_hooks_3_prev'
import StreamDemo from './components/12_stream'
import Page from './components/13_gunzip'
import UnGzipDemo from './components/14_pako_ungzip'
import CheckBoxDemo from './components/15_checkbox'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>CheckBoxDemo</h2>
        <CheckBoxDemo />
        <h2>
        UnGzipDemo
        </h2>
        <UnGzipDemo />
        <h2>
        Page
        </h2>
        <Page />
        <h2>StreamDemo</h2>
        <StreamDemo />
        <h2>*setState using class comp</h2>
        <Demo />
        <A />
        <h2>*setState using func comp + useState</h2>
        <UseStatesDemo />
        <h2>InputDemo</h2>
        <InputDemo />
        <h2>UseStateCountDemo</h2>
        <UseStateCountDemo />
        <h2>ReducerDemo</h2>
        <ReducerDemo />
      </div>
    )
  }
}
