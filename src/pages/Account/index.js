import React from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Table, Form, Row, Col, Input, Select, Button, Modal } from 'antd';

const ModalConfirm = Modal.confirm;
const FormItem = Form.Item;

@connect(({ user, loading }) => ({
  loading: loading.effects['account/fetchUsers'],
  userList: user.userList,
}))
@Form.create()
class AccountList extends React.Component {
  state = {
    searchKeyword: '',
  };

  columns = [
    {
      title: '#',
      key: 'id',
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="##">{text}</a>,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '个人签名',
      dataIndex: 'profile',
      key: 'profile',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: type => <span>{type === 2 ? '管理员' : '普通用户'}</span>,
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
      render: date => <span>{new Date(date).toLocaleString()}</span>,
    },
    {
      title: '操作',
      width: 70,
      key: 'action',
      fixed: 'right',
      render: record => <a onClick={this.handleDelete.bind(this, record)}>删除</a>,
    },
  ];

  componentDidMount() {
    this.props.dispatch({
      type: 'user/fetchUsersList',
    });
  }

  handleDelete = obj => {
    ModalConfirm({
      title: '确定删除?',
      content: '删除后不可恢复',
      onOk: () => {
        this.props.dispatch({
          type: 'user/deleteUser',
          payload: obj._id,
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  renderSimpleForm() {
    const { searchKeyword } = this.state;
    return (
      <Form layout="inline" style={{ marginBottom: '20px' }}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={24} sm={24}>
            <FormItem>
              <Input
                placeholder="标题/描述"
                value={searchKeyword}
                onChange={this.handleChangeSearchKeyword}
              />
            </FormItem>

            <Select
              style={{ width: 200, marginRight: 20 }}
              placeholder="选择状态"
              onChange={this.handleChangeSearchState}
            >
              {/* 文章发布状态 => 0 草稿，1 已发布'' 代表所有文章 */}
              <Select.Option value="">所有</Select.Option>
              <Select.Option value="0">草稿</Select.Option>
              <Select.Option value="1">已发布</Select.Option>
            </Select>

            <span>
              <Button
                onClick={this.handleSearch}
                style={{ marginTop: '3px' }}
                type="primary"
                icon="search"
              >
                Search
              </Button>
            </span>
            <span>
              <Button
                onClick={() => {
                  this.showModal(0);
                }}
                style={{ marginTop: '3px', marginLeft: '10px' }}
                type="primary"
              >
                新增
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <PageHeaderWrapper title="用户列表">
        <Card bordered={false}>
          <div className="">
            <div className="">{this.renderSimpleForm()}</div>
            <Table
              scroll={{ x: 1200 }}
              loading={this.props.loading}
              pagination="bottom"
              rowKey={record => record._id}
              columns={this.columns}
              bordered
              dataSource={userList}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AccountList;
