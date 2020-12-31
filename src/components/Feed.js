import React, {useState, useEffect}  from 'react'
import { authApi } from '../shared/api'
import Post from './Post'
import CircularProgress from '@material-ui/core/CircularProgress';

const Feed = props => {

    return (
        <div class="border-solid mt-2 border-t border-dividerGray">
                {props.posts ? <div>
                    {props.posts.map((post) => {
                        return <Post key={post._id} post={post} />
                    })}
                </div>
                : 
                <div class="mt-4">
                    <CircularProgress />
                </div>
                
            }            
            
        </div>
    )
}

export default Feed;