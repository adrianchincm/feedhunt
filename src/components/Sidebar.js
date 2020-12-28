import React from 'react'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { SideBarButton } from '../styles/materialui'
import { authApi } from '../shared/api'
import { HTTP_POST } from '../constants'
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const Sidebar = props => {

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

    return (        
        <div class="p-8">
           <div class="flex items-center shadow-none">               
               <SideBarButton               
                startIcon={<ExitToAppOutlinedIcon />}
                onClick={() => logout()}
                >
                Logout
               </SideBarButton>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        clearUser: (user) => dispatch(actions.setUser(user)),         
    }
  }
  
export default connect(null, mapDispatchToProps)(Sidebar);