import { Table, Divider, Tag } from 'antd'
import React from 'react'

const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title',
  render: text => <a href="##">{text}</a>,
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
      <a href="##">修改</a>
      <Divider type="vertical" />
      <a href="##">删除</a>
    </span>
  ),
}];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};



export default function MyTable (props) {
  return (
    <Table rowSelection={rowSelection} columns={columns} bordered={true} dataSource={props.data} />
  )
}