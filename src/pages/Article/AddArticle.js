import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

@Form.create()
class AddArticle extends React.Component {
  state = {
    formLayout: 'horizontal',
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 3 },
            wrapperCol: { span: 8 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 2 },
          }
        : null;
        
    return (
      <PageHeaderWrapper title="添加文章">
        <Card bordered={false}>
          <Form layout={formLayout}>
            <FormItem label="文章标题" {...formItemLayout}>
              {getFieldDecorator('articleTitle', {
                rules: [{ required: true, message: 'Please enter the title!', whitespace: true }],
              })(<Input />)}
            </FormItem>
            <FormItem label="文章关键字" {...formItemLayout}>
              {getFieldDecorator('keywords', {
                rules: [
                  { required: true, message: 'Please enter the keywords!', whitespace: true },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="文章标签" {...formItemLayout}>
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
                  mode="multiple"
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
            <FormItem label="文章描述" {...formItemLayout}>
              {getFieldDecorator('description', {
                rules: [
                  { required: true, message: 'Please enter the description!', whitespace: true },
                ],
              })(<TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />)}
            </FormItem>
            <FormItem label="文章内容" {...formItemLayout}>
              {/* <MarkDown callback={this.callback} html={this.state.html} val={this.state.val} /> */}
            </FormItem>
            <FormItem label="添加banner" {...formItemLayout}>
              {/* <FormUpload handleOnChange={this.onChange} /> */}
            </FormItem>
            <FormItem {...buttonItemLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AddArticle;
