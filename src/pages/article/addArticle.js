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
      html: '',
      val: ''
      
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
        const { fileList } = this.state
        const formData = new FormData()
        fileList.map((file) => {
          return formData.append('file', file.originFileObj)
        })
        formData.append('markdown', this.state.html)
        formData.append('content', this.state.val)
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

  onChange = (file) => {
    this.setState(() => ({
      fileList: [...file]
    }))
  }

  callback = (data) => {
    let { val, html } = data
    this.setState({
      val: val,
      html
    })
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
            {getFieldDecorator('tags', {
              rules: [{ required: true, type: 'array', message: 'Please choose tag!', whitespace: true }],
            })(
              <Select
                showSearch
                mode="multiple"
                placeholder="选择标签"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Javascript">Javascript</Option>
                <Option value="Node">Node</Option>
                <Option value="Vue">Vue</Option>
              </Select>
            )}
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
            <MarkDown callback={this.callback} html={this.state.html} val={this.state.val}></MarkDown>
          </FormItem>
          <FormItem
            label="添加banner"
						{...formItemLayout}
						wrapperCol = {{span: 14}}
          >
            <FormUpload handleOnChange={this.onChange} ></FormUpload>
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