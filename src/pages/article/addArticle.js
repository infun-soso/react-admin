import React from 'react'
import { Form, Input, Button, message } from 'antd';
import api from '../../api'

const { TextArea } = Input;
const FormItem = Form.Item;

class CustomizedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      fields: {}
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        api.addArticle(values)
          .then(res => {
            if (res.code === 0) {
              message.success('提交成功');
            }
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 2 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="文章标题"
            {...formItemLayout}
          >
            {getFieldDecorator('articleTitle', {
              rules: [{ required: true, message: 'Please enter the title!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="文章关键字"
            {...formItemLayout}
          >
            {getFieldDecorator('keywords', {
              rules: [{ required: true, message: 'Please enter the keywords!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
					<FormItem
            label="文章标签"
            {...formItemLayout}
          >
          </FormItem>
					<FormItem
            label="文章描述"
						{...formItemLayout}
						wrapperCol = {{span: 14}}
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please enter the description!', whitespace: true }],
            })(
						  <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
            )}
          </FormItem>
					<FormItem
            label="文章内容"
						{...formItemLayout}
						wrapperCol = {{span: 14}}
          >
            {getFieldDecorator('content', {
              rules: [{ required: true, message: 'Please enter the content!', whitespace: true }],
            })(
					  	<TextArea placeholder="" autosize={{ minRows: 6 }} />
            )}
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
CustomizedForm = Form.create({})(CustomizedForm);
export default class AddArticle extends React.Component {
	render() {
		return (
			<div className="index">
				<CustomizedForm />
			</div>
		)
	}
}