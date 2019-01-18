import React from 'react';
import Markdown from './Markdown';
import './index.less';

export default ({ callback, html, val }) => (
  <div className="markdown_wrapper">
    <Markdown callback={callback} html={html} val={val} />
  </div>
);
