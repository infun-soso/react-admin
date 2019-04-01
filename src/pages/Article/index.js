import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Table, Form, Row, Col, Select, Input, Button, Tag } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './style.less';

const FormItem = Form.Item;
@connect(({ article }) => ({
  article,
}))
class ArticleList extends React.Component {
  state = {
    searchKeyword: '',
  };

  columns = [
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'title',
      render: text => <a href="##">{text}</a>,
    },
    {
      title: '发布日期',
      dataIndex: 'create_at',
      key: 'create_at',
      render: time => new Date(time).toLocaleString(),
    },
    {
      title: '封面图',
      dataIndex: 'images',
      key: 'images',
      render: src => <img alt="" src={src} className={styles.surfaceImg} />,
    },
    {
      title: '关键字',
      dataIndex: 'keyword',
      key: 'keyword',
    },
    {
      title: '标签',
      key: 'tag',
      dataIndex: 'tag',
      render: tags => (
        <span>
          {tags &&
            tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, scope, record) => (
        <a onClick={this.handleEdit.bind(this, text, scope, record)}>修改</a>
      ),
    },
  ];

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/getArticleList',
    });
  }

  handleEdit = (text, scope) => {
    router.push(`/article/edit/${scope._id}`);
  };

  handleSearch = () => {
    console.log('handleSearch');
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
    const {
      article: { articleList },
    } = this.props;
    return (
      <PageHeaderWrapper title="文章列表">
        <Card bordered={false}>
          <div className="">
            <div className="">{this.renderSimpleForm()}</div>
            <Table
              // pagination={pagination}
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

export default ArticleList;
