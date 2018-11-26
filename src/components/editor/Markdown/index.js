import React from 'react'
import Markdown from '@/components/Markdown'
import './index.less'

export default class MarkdownView extends React.Component {
  render () {
    return (
      <div className="markdown_wrapper">
        <Markdown callback={this.props.callback}/>
      </div>
    )
  }
}