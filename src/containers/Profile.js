import React, {useState, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Feed from '../components/Feed'
import { Button, Tag } from 'antd';
import {connect} from 'react-redux';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'
import { ThemeProvider } from '@material-ui/core/styles';
import { backButtonTheme } from '../styles/materialui'
import {FormattedMessage} from 'react-intl';
import { monthYearDate } from '../shared/utility'
import { CheckOutlined } from '@ant-design/icons';
import avatar from '../images/user.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../store/actions/index'


const Profile = props => {

    const [userProfile, setUserProfile] = useState(null)
    const [isFollowing, setIsFollowing] = useState(null)

    useEffect(() => {
        getUserProfile()
    }, [props.username])

    const getUserProfile = async () => {           
        const username = props.username

        try {
            const userProfileResponse = await authApi(END_POINTS.getUserPosts({ username }))
            console.log(userProfileResponse)
            setUserProfile(userProfileResponse)            
            setIsFollowing(props.user.following.includes(userProfileResponse.user._id))
            
        } catch (e) {
            console.log(e)
        }                
    }

    const followUser = async () => {     
        const username = props.username
        
        try {
            const { success } = await authApi(END_POINTS.follow({ username }), { method: HTTP_POST })
            if (success) {                
                props.updateFollowing(userProfile.user._id)
                setIsFollowing(true)                
            }

        } catch (e) {
            console.log(e)
        }                
    }   

    return (
        <ThemeProvider theme={backButtonTheme}>
        <div class="border-solid">
            <div class="p-4 flex sticky top-0 bg-bgPrimary z-10 items-center border-solid border-b border-dividerGray">
                <IconButton aria-label="delete" onClick={() => props.goBack()}>
                    <ArrowBackIcon />
                </IconButton>

                {userProfile ?
                    <div class="flex items-center">
                        <p class="mb-0 ml-4 font-bold text-xl">{userProfile.user.username}</p> 
                        <p class="mb-0 ml-4 text-textgray">{userProfile.totalPosts} Posts</p> 
                    </div>                    
                    : null}
                
            </div>

            {userProfile ?
             <div class="relative text-center align-center">
                
                <div class="flex justify-center items-start p-4 border-solid border-b border-dividerGray">
                    <div>
                        <img src={userProfile.user.avatar || avatar}                                     
                            alt="avatar"
                            class="rounded-full w-130px h-130px mx-auto border-solid border-4 border-secondary"
                        />

                        <p class="mb-0 mt-4 font-bold text-2xl">{userProfile.user.displayname}</p>
                        <p class="text-textgray mb-0">{userProfile.user.username}</p>

                        <p class="text-textgray mb-0">
                            <FormattedMessage
                                id="joined"          
                            />
                            &nbsp;
                            {monthYearDate(new Date(userProfile.user.createdAt))}
                        </p>                        

                        <div class="rounded-full mt-2">
                            <Tag color="#00c400">
                                <FormattedMessage
                                    id="following"          
                                />
                            </Tag>
                        </div>

                        <div class="flex mt-4">
                            <p class="font-bold">{userProfile.following} &nbsp;</p>                            
                            <p class="text-textgray">Following</p>

                            <p class="ml-4 font-bold">{userProfile.followers} &nbsp;</p>                            
                            <p class="text-textgray">Followers</p>
                        </div>
                    </div>
                 
                    <div class="absolute top-0 right-0 mt-8 mr-8">
                    {props.user.username === props.username ? null : 
                        <div>
                            {isFollowing ? 
                            <div class="flex flex-col">
                                <Button type="primary" shape="round" size="large" onClick={() => followUser()}>
                                    <FormattedMessage
                                        id="unfollow"          
                                    />
                                </Button> 
                                
                            </div>
                            : 
                            <Button type="primary" ghost shape="round" size="large" onClick={() => followUser()}>
                                <FormattedMessage
                                    id="follow"          
                                />
                            </Button>}
                            
                        </div>
                         }
                    </div> 
                </div>    

                <Feed posts={userProfile.posts}/>
                <Feed posts={userProfile.posts}/>

            </div> : 
                <div class="mt-4">
                    <CircularProgress />
                </div>}
            
            
        </div>
        </ThemeProvider>
    );
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFollowing: (followingUserId) => dispatch(actions.updateFollowing(followingUserId)),         
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);