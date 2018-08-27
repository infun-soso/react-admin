import React from 'react'
import { Form, Input, Button, Radio } from 'antd';
console.log(Input)
const { TextArea } = Input;
const FormItem = Form.Item;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
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
            <Input />
          </FormItem>
          <FormItem
            label="文章关键字"
            {...formItemLayout}
          >
            <Input />
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
						<TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
          </FormItem>
					<FormItem
            label="文章内容"
						{...formItemLayout}
						wrapperCol = {{span: 14}}
          >
						<TextArea placeholder="" autosize={{ minRows: 6 }} />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default class AddArticle extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="index">
				<FormLayoutDemo />
			</div>
		)
	}
}