import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Table, Form, Row, Col, Input, Select, Button } from 'antd';

const FormItem = Form.Item;
@Form.create()
class AccountList extends React.Component {
  state = {
    searchKeyword: '',
  };

  columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      render: text => <a href="##">{text}</a>,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '手机',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '个人签名',
      dataIndex: 'sign',
      key: 'sign',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, scope, record) => (
        <span onClick={this.handleEdit.bind(this, text, scope, record)}>删除</span>
      ),
    },
  ];

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
    const { articleList } = this.props;
    return (
      <PageHeaderWrapper title="用户列表">
        <Card bordered={false}>
          <div className="">
            <div className="">{this.renderSimpleForm()}</div>
            <Table
              // loading={this.state.loading}
              // pagination={pagination}
              rowKey={record => record._id}
              columns={this.columns}
              bordered
              dataSource={articleList}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AccountList;
