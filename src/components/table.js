import { Table, Divider, Tag } from 'antd'
import React from 'react'
import api from '../api'
const columns = [{
  title: '文章标题',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '发布日期',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '分类',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '阅读量',
  key: 'tags',
  dataIndex: 'tags',
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
console.log(api)
export default class MyTable extends React.Component {
	render() {
		return (
			<Table columns={columns} bordered={true} dataSource={data} />
		)
	}
}