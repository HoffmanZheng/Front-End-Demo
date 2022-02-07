import React, { Component, useState } from 'react';
import {Typography} from 'antd'

const { Paragraph } = Typography;



const Demo = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  return (<div>
    <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
  </div>)
}

export default class EditableStr extends Component {

  render() {
    return <Demo />
  }
}
