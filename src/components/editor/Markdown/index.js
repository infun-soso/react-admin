import React from 'react'
import {Row, Col, Card} from 'antd'
import Markdown from '@/components/Markdown'
import './index.less'

export default class MarkdownView extends React.Component {
  render () {
    return (
      <div className="markdown_wrapper">
        <Row gutter={16}>
          <Col span={24}>
            <Card title="Markdown编辑器"><Markdown callback={this.props.callback}/></Card>
          </Col>
          <Col span={12}>
            <Card title="同步转换MarkDown" bordered={true}>
                <pre style={{whiteSpace: 'pre-wrap'}}>{this.props.markdown}</pre>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="同步转换HTML" bordered={true}>
                <pre>{this.props.html}</pre>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}