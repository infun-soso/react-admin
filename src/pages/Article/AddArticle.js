import React from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import FormUpload from '@/components/FormUpload';
import Markdown from '@/components/Markdown';
import marked from 'marked';
import highlightJs from 'highlight.js';
import { Card, Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

@connect()
@Form.create()
class AddArticle extends React.Component {
  constructor() {
    super();
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
  }

  state = {
    formLayout: 'horizontal',
    fileList: [],
    html: '',
  };

  callback = data => {
    const { val } = data;
    this.setState({
      html: val,
    });
    this.props.form.setFieldsValue({
      content: val,
    });
  };

  onChange = file => {
    this.setState(() => ({
      fileList: [...file],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { fileList, html } = this.state;
        const formData = new FormData();
        fileList.map(file => formData.append('file', file.originFileObj));
        formData.append('markdown', marked(html));
        for (const key in values) {
          formData.append(key, values[key]);
        }
        this.props.dispatch({
          type: 'article/addArticle',
          payload: formData,
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { formLayout, html, val } = this.state;
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
                rules: [{ required: true, message: 'Please enter the title!', whitespace: true }],
              })(<Input />)}
            </FormItem>
            <FormItem label="关键字" {...formItemLayout}>
              {getFieldDecorator('keywords', {
                rules: [
                  { required: true, message: 'Please enter the keywords!', whitespace: true },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="标签" {...formItemLayout}>
              {getFieldDecorator('tags', {
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
                  placeholder="标签"
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
                rules: [
                  { required: true, message: 'Please enter the description!', whitespace: true },
                ],
              })(<TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>
            <Markdown
              callback={this.callback}
              html={html}
              val={val}
              getFieldDecorator={getFieldDecorator}
              formItemLayout={formItemLayout}
            />
            <FormItem label="添加banner" {...formItemLayout}>
              <FormUpload handleOnChange={this.onChange} />
            </FormItem>
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

export default AddArticle;
