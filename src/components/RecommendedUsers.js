import React, {useState, useEffect} from 'react'
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import RecommendedUsersRow from './RecommendedUserRow'
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';

const RecommendedUsers = props => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getRecommendedUsers()
    }, [])

    const getRecommendedUsers = async () => {
        const recommendedUsers = await authApi(END_POINTS.recommended)
        setUsers(recommendedUsers)
    }

    
    const usersToDisplay = users.map((user) => {
        if (props.user && user._id !== props.user._id && !props.user.following.includes(user._id) ) {                    
            return <RecommendedUsersRow userId={user._id} userAvatar={user.avatar} username={user.username} displayname={user.displayname}/>                             
        } else {
            return null
        }                
    })

    return (
        <div class="flex flex-col width-500px mr-4 bg-bgPrimaryLight rounded-3xl">
            
            {usersToDisplay.length > 0 ? <p class="font-bold text-2xl mt-2 mb-2"><FormattedMessage id="who-to-follow" /></p> : null}

            {usersToDisplay}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,     
    }
}
  
export default connect(mapStateToProps, null)(RecommendedUsers);