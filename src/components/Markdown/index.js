import React from 'react';
import marked from 'marked';
import highlightJs from 'highlight.js';
import './index.less';
import './iconfont';
import { Input, Form } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;

class Markdown extends React.PureComponent {
  constructor() {
    super();
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true, // 允许 Git Hub标准的markdown.
      tables: true, // 允许支持表格语法。该选项要求 gfm 为true。
      breaks: true, // 允许回车换行。该选项要求 gfm 为true。
      pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
      sanitize: true, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
      smartLists: true, // 使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
      smartypants: false, // 使用更为时髦的标点，比如在引用语法中加入破折号。
      highlight(code) {
        return highlightJs.highlightAuto(code).value;
      },
    });
  }

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
