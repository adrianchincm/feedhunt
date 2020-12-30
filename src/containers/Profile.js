import React, {useState, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Feed from '../components/Feed'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'
import { ThemeProvider } from '@material-ui/core/styles';
import { backButtonTheme } from '../styles/materialui'
import {FormattedMessage} from 'react-intl';
import { monthYearDate } from '../shared/utility'

const ComposeHeader = props => {

    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async () => {   
        
        const username = props.username

        try {
            const userProfileResponse = await authApi(END_POINTS.getUserPosts({ username }))
            console.log(userProfileResponse)
            setUserProfile(userProfileResponse)
        } catch (e) {
            console.log(e)
        }                
    }

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

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div class="border-solid border-b border-dividerGray">
            <div class="p-4 flex sticky items-center border-solid border-b border-dividerGray">
                <IconButton aria-label="delete" onClick={() => props.goBack()}>
                    <ArrowBackIcon />
                </IconButton>

                {userProfile ? <p class="mb-0 ml-4">{userProfile.user.username}</p> : null}
                
            </div>

            {userProfile ?
             <div class="text-left">
                
                <div class="border-solid border-b border-dividerGray">
                    <img src={userProfile.user.avatar || null}                                     
                        alt="avatar"
                        class="rounded-full w-130px h-130px border-solid border-4 border-secondary"
                    />

                    <p class="mb-0">{userProfile.user.displayname}</p>
                    <p class="text-textgray mb-0">{userProfile.user.username}</p>

                    <p class="text-textgray mb-0">
                        <FormattedMessage
                            id="joined"          
                        />
                        &nbsp;
                        {monthYearDate(new Date(userProfile.user.createdAt))}
                    </p>

                    <div class="flex">
                        <p>{userProfile.following} Following</p>
                        <p class="ml-4">{userProfile.followers} Followers</p>
                    </div>
                </div>    

                <Feed posts={userProfile.posts}/>
                <Feed posts={userProfile.posts}/>

            </div> : null}
            
            
        </div>
        </ThemeProvider>
    );
}

export default ComposeHeader;