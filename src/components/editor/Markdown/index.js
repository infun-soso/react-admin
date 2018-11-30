import React from 'react'
import Markdown from '@/components/Markdown'
import './index.less'

export default class MarkdownView extends React.Component {

  render () {
    return (
      <div className="markdown_wrapper">{
        console.log(this.props.val,'-')
      }
        <Markdown callback={this.props.callback} html={this.props.html} val={this.props.val}/>
      </div>
    )
  }
}