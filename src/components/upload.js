import {Icon, Button, Upload} from 'antd'
import React from 'react'

export default class FormUpload extends React.Component {
  render() {
    const { handleOnChange } = this.props
    const props = {
      name: 'banner',
      action: '',
      multiple: true,
      headers: {},
      beforeUpload(file) {
        return false;
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          handleOnChange(info.fileList)
        }
      },
    }
    
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> 点击上传
          </Button>
        </Upload>
      </div>
    )
  }
}