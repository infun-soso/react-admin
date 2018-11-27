import {Icon, message, Button, Upload} from 'antd'
import React from 'react'

export default class FormUpload extends React.Component {
  render() {
    const { handleBeforeUpload } = this.props
    const props = {
      name: 'banner',
      action: '',
      headers: {},
      beforeUpload(file) {
        handleBeforeUpload(file)
        return false;
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      customRequest() {
        
      }
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