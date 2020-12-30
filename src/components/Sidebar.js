import React from 'react'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { SideBarButton } from '../styles/materialui'
import { authApi } from '../shared/api'
import { HTTP_POST } from '../constants'
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { useHistory, useLocation } from "react-router-dom";
import * as actions from '../store/actions/index'

const Sidebar = props => {

    const history = useHistory()
    const location = useLocation()

    const home = () => {
        history.push('/home')
        props.refreshFeed()
    }

   const logout = async () => {
       try {
        const logout = await authApi('/users/logout', {
            method: HTTP_POST,
        })
    
        if (logout.success) {
            props.clearUser()
            window.sessionStorage.removeItem("authToken");
            window.location.replace('/');        
        }
       } catch (e) {
        console.log(e)
       }
   }

   const profile = () => {       
        history.push(`/user/${props.user.username}`)
   }

    return (        
        <div class="p-8">            
           
           <div class="flex items-center">               
               <SideBarButton               
                startIcon={<HomeOutlinedIcon color="action"/>}
                onClick={() => home()}
                >
                <div class={location.pathname === '/home' ? "text-secondary" : null}>
                    <FormattedMessage id="home"/>
                </div>
                    
               </SideBarButton>
            </div>

            <div class="flex items-center mt-4">               
               <SideBarButton               
                startIcon={<PersonOutlineIcon />}
                onClick={() => profile()}
                >
                <div class={location.pathname === `/user/${props.user.username}` ? "text-secondary" : null}>
                    <FormattedMessage id="profile"/>
                </div>
                    
               </SideBarButton>
            </div>

            <div class="flex items-center mt-4">               
               <SideBarButton               
                startIcon={<ExitToAppOutlinedIcon />}
                onClick={() => logout()}
                >
                    <FormattedMessage id="logout"/>
               </SideBarButton>
            </div>

            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user.user,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearUser: (user) => dispatch(actions.setUser(user)),         
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);