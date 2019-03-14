import React from 'react';
import { connect } from 'dva';
import marked from 'marked';
import highlightJs from 'highlight.js';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Markdown from '@/components/Markdown';
import { Card, Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: true,
  smartLists: true,
  smartypants: true,
  highlight(code) {
    return highlightJs.highlightAuto(code).value;
  },
});

@connect(({ article }) => ({
  post: article.post,
}))
@Form.create()
class EditArticle extends React.Component {
  state = {
    formLayout: 'horizontal',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'article/getArticle',
      payload: {
        postId: this.props.match.params._id,
      },
    });
  }

  callback = data => {
    const { val } = data;
    this.props.form.setFieldsValue({
      content: val,
    });
  };

  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = {
          ...values,
          markdown: marked(values.content),
          postId: this.props.match.params._id,
        };
        dispatch({
          type: 'article/editArticle',
          payload: params,
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { formLayout, val } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 3 },
            wrapperCol: { span: 19 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 3 },
          }
        : null;
    return (
      <PageHeaderWrapper title="添加文章">
        <Card bordered={false}>
          <Form layout={formLayout} onSubmit={this.handleSubmit}>
            <FormItem label="标题" {...formItemLayout}>
              {getFieldDecorator('articleTitle', {
                initialValue: this.props.post.title,
                rules: [{ required: true, message: 'Please enter the title!', whitespace: true }],
              })(<Input />)}
            </FormItem>
            <FormItem label="关键字" {...formItemLayout}>
              {getFieldDecorator('keywords', {
                initialValue: this.props.post.keyword,
                rules: [
                  { required: true, message: 'Please enter the keywords!', whitespace: true },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="标签" {...formItemLayout}>
              {getFieldDecorator('tags', {
                initialValue: this.props.post.tag,
                rules: [
                  {
                    required: true,
                    type: 'array',
                    message: 'Please choose tag!',
                    whitespace: true,
                  },
                ],
              })(
                <Select
                  showSearch
                  mode="tags"
                  placeholder="选择标签"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Javascript">Javascript</Option>
                  <Option value="Node">Node</Option>
                  <Option value="Vue">Vue</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                initialValue: this.props.post.descript,
                rules: [
                  { required: true, message: 'Please enter the description!', whitespace: true },
                ],
              })(<TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>
            <Markdown
              callback={this.callback}
              html={this.props.post.content}
              val={val}
              getFieldDecorator={getFieldDecorator}
              formItemLayout={formItemLayout}
            />
            {/* <FormItem label="添加banner" {...formItemLayout}>
              <FormUpload handleOnChange={this.onChange} />
            </FormItem> */}
            <FormItem {...buttonItemLayout}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default EditArticle;
