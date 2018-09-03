import { Table, Divider, Tag } from 'antd'
import React from 'react'

const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '发布日期',
  dataIndex: 'create_at',
  key: 'create_at',
  render: time => {
    return new Date(time).toLocaleString()
  }
}, {
  title: '关键字',
  dataIndex: 'keyword',
  key: 'keyword',
}, {
  title: '标签',
  key: 'tag',
  dataIndex: 'tag',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: () => (
    <span>
      <a href="javascript:;">修改</a>
      <Divider type="vertical" />
      <a href="javascript:;">删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];


export default function MyTable (props) {
  console.log(props)
  return (
    <Table columns={columns} bordered={true} dataSource={props.data} />
  )
}