import React, {useState} from 'react'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'

const ComposeHeader = props => {

    const [content, setContent] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)

    const createPost = async () => {
        setButtonLoading(true)

        var postObj = {
            content
        }

        try {
            await authApi(END_POINTS.create_post, {
                method: HTTP_POST,
                body: JSON.stringify(postObj)
            })

            setButtonLoading(false)
            props.refreshFeed()
            setContent('')
        } catch (e) {
            console.log(e)
        }        
        
    }

    const onContentChanged = text => event => {
        setContent(event.target.value);    
    }

    return (
        
        <div class="p-4 border-solid border-b border-dividerGray">
            <div class="text-left">
                <InputBase 
                    placeholder="What do you want to share?"
                    inputProps={{style: {fontSize: 20, color: 'white', width: '420px', lineHeight: '1.6'}}}
                    color="#fff"
                    multiline
                    value={content}
                    onChange={onContentChanged('inputText')}
                />
            </div>
            <div class="text-right">
                <Button 
                    type="primary"
                    shape="round" 
                    icon={<SendOutlined />} 
                    size="large"
                    loading={buttonLoading}
                    disabled={content.length === 0} 
                    onClick={() => createPost()}>
                    Post
                </Button>
            </div>                        
        </div>
    );
}

export default ComposeHeader;