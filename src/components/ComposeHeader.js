import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';


const ComposeHeader = () => {

    return (
        
        <div>
            <div class="p-3">
                <InputBase 
                    placeholder="What do you want to share?"
                    inputProps={{style: {fontSize: 20, color: 'white', minWidth: '300px', lineHeight: '1.6'}}}
                    color="#fff"
                    multiline
                />
            </div>
            <Button type="primary" shape="round" icon={<SendOutlined />} size="large">
                Post
            </Button>
            {/* <div class="text-secondary">TESTING</div>             */}
        </div>
    );
}

export default ComposeHeader;