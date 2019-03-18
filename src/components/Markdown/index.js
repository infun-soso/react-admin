import React from 'react';

import './index.less';
import './iconfont';
import { Input, Form } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;

class Markdown extends React.PureComponent {
  handleInput(val) {
    this.props.callback({
      val,
    });
  }

  render() {
    const { getFieldDecorator, formItemLayout } = this.props;
    return (
      <FormItem label="文章内容" {...formItemLayout}>
        {getFieldDecorator('content', {
          initialValue: this.props.html,
          rules: [{ required: true, message: 'Please enter the content!', whitespace: true }],
        })(
          <TextArea
            onChange={e => {
              this.handleInput(e.target.value);
            }}
            autosize={{ minRows: 10, maxRows: 30 }}
          />
        )}
      </FormItem>
    );
  }
}
export default Markdown;
