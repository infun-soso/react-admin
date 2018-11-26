import React from 'react'
import FormUpload from '@/components/upload'
import MarkDown from '@/components/editor/Markdown'
import { Form, Input, Button, message, Select } from 'antd';
import api from '../../api'

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option


class CustomizedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      fields: {},
      fileList: [],
      markdown: '',
      html: ''
    };
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
    console.log(1111)

        const { fileList } = this.state
        const formData = new FormData()
        fileList.map((file) => {
          return formData.append('files[]', file)
        })
        formData.append('content', this.state.html)
        for (let key in values) {
          formData.append(key, values[key])
        }
        api.addArticle(formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
            if (res.code === 0) {
              message.success('提交成功');
            }
          })
      }
    });
  }

  beforUpload = (file) => {
    console.log(file)
    this.setState(({ fileList }) => ({
      fileList: [...fileList, file]
    }))
  }

  callback = (data) => {
    let { markdown, html } = data
    this.setState({
      markdown,
      html
    })
    console.log(this.state.html)
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
						  <Select
                showSearch
                mode="multiple"
                placeholder="Select a tag"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
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
            <MarkDown callback={this.callback} html={this.state.html} markdown={this.state.markdown}></MarkDown>
          </FormItem>
          <FormItem
            label="添加banner"
						{...formItemLayout}
						wrapperCol = {{span: 14}}
          >
            <FormUpload handleBeforeUpload={this.beforUpload}></FormUpload>
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