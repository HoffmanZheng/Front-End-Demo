import React, { Component } from 'react';
import { DatePicker, Button, Tooltip } from 'antd';
import { SearchOutlined, AndroidOutlined, GoogleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

import EditableStr from './component/editable_str'

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    hello
                </div>
                <div>
                    <DatePicker />
                </div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <AndroidOutlined />
                <GoogleOutlined />
                <EditableStr />
            </div>
        );
    }
}

export default App;
