import React from 'react';
import marked from 'marked';
import highlightJs from 'highlight.js';
import './index.less';
import './iconfont';

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      val: '支持markdown',
      html: '',
    };
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

  componentWillMount() {
    this.setState(
      {
        val: this.props.val || '/*支持markdown*33/',
      },
      () => {
        this.renderHtml();
      }
    );
  }

  componentWillReceiveProps(props) {
    this.setState({
      val: props.val,
      html: props.html,
    });
  }

  handleInput(val) {
    this.setState(
      {
        val,
      },
      () => {
        this.renderHtml();
      }
    );
  }

  renderHtml() {
    this.setState(
      prevState => ({
        html: marked(prevState.val),
      }),
      () => {
        const { val, html } = this.state;
        this.props.callback({ val, html });
      }
    );
  }

  render() {
    return (
      <div id="markdowm">
        <textarea
          ref={c => {
            this.text = c;
          }}
          value={this.state.val}
          onChange={e => {
            this.handleInput(e.target.value);
          }}
        />
        <div className="render fmt" dangerouslySetInnerHTML={{ __html: this.state.html }} />
      </div>
    );
  }
}
export default Markdown;
