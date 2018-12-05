import React from 'react'
import FormUpload from '@/components/upload'
import MarkDown from '@/components/editor/Markdown'
import { Form, Input, Button, message, Select } from 'antd';
import api from '../../api'
import { withRouter} from 'react-router'

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option


class CustomizedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
      fields: {},
      fileList: [],
      markdown: '',
      val: '',
      html: '',
      asyncData: {}
    };
  }

  componentDidMount() {
    console.log(this.props)
		api.getArticleById({
      postId: this.props.match.params.postId
    }).then(res => {
			if (res.code === 0) {
				this.setState({
          asyncData: res.data[0],
          val: res.data[0]['content'],
          html: res.data[0]['markdown']
				})
			}
    })
	}

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const params = {
          ...values,
          markdown: this.state.html,
          content: this.state.val,
          postId: this.props.match.params.postId
        }
        api.updateArticle(params).then(res => {
            if (res.code === 0) {
              message.success('修改成功');
            }
          })
      }
    });
  }

  beforUpload = (file) => {
    this.setState(({ fileList }) => ({
      fileList: [...fileList, file]
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
    const { formLayout, asyncData } = this.state;
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
              initialValue: asyncData.title 
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            label="文章关键字"
            {...formItemLayout}
          >
            {getFieldDecorator('keywords', {
              rules: [{ required: true, message: 'Please enter the keywords!', whitespace: true}],
              initialValue: asyncData.keyword
            })(
              <Input/>
            )}
          </FormItem>
					<FormItem
            label="文章标签"
            {...formItemLayout}
          >
            {getFieldDecorator('tag', {
              rules: [{ required: true, type: 'array', message: 'Please choose tag!', whitespace: true }],
              initialValue: asyncData.tag
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
						wrapperCol = {{span: 20}}
          >
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please enter the description!', whitespace: true }],
              initialValue: asyncData.descript 
            })(
						  <TextArea placeholder="" autosize={{ minRows: 2, maxRows: 6 }} />
            )}
          </FormItem>
					<FormItem
            label="文章内容"
						{...formItemLayout}
						wrapperCol = {{span: 20}}
          >
            <MarkDown callback={this.callback} val={this.state.val} html={this.state.html}></MarkDown>
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick={this.handleSubmit}>确认修改</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
// 非路由组件需要使用withRouter 获取location match params
CustomizedForm = withRouter(Form.create({})(CustomizedForm))
export default class AddArticle extends React.Component {
	render() {
		return (
			<div className="index">
				<CustomizedForm />
			</div>
		)
	}
}