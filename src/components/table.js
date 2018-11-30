import { Table, Divider, Tag } from 'antd'
import React from 'react'
import { withRouter} from 'react-router'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

class MyTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [{
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
      render: (text, scope, record) => (
        <span onClick={() => this.handleUpdate(text, scope, record)}>
          <a href="javascript:;">修改</a>
          {/* <Divider type="vertical" /> */}
          {/* <a href="##">删除</a> */}
        </span>
      ),
    }];
  }

  handleUpdate = (text, scope, record) => {
    console.log(this.props.history.push)
    this.props.history.push(`/updatearticle/${scope._id}`, {
      _id: scope._id
    })
  }

  render() {
    const { data } = this.props
    data.map((item, index) => 
      item.key = index
    )
    return (
      <Table rowSelection={rowSelection} columns={this.columns} bordered={true} dataSource={data} />
    )
  }
}

export default withRouter(MyTable)