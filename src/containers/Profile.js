import React, {useState} from 'react'
import { Button } from 'antd';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'

const ComposeHeader = props => {

    // const [content, setContent] = useState('')

    const followUser = async (userId) => {
        

        var followObj = {
            userId
        }

        try {
            await authApi(END_POINTS.create_post, {
                method: HTTP_POST,
                body: JSON.stringify(followObj)
            })

            // setButtonLoading(false)
            // props.refreshFeed()
            // setContent('')
        } catch (e) {
            console.log(e)
        }        
        
    }

    // const onContentChanged = text => event => {
    //     setContent(event.target.value);    
    // }

    return (
        
        <div class="p-4 border-solid border-b border-dividerGray">
            <p>TESTING PROFILE COMPONENT</p>                      
        </div>
    );
}

export default ComposeHeader;