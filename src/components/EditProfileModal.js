import React, {useState, useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import defaultAvatar from '../images/user.png'
import Snackbar from './Snackbar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { LoadingOutlined } from '@ant-design/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from '../styles/materialui';
import { HTTP_PATCH }  from '../constants'
import {FormattedMessage} from 'react-intl';
import { END_POINTS }  from '../endpoints'
import { Button } from 'antd';
import { authApi } from '../shared/api'
import { modalStyles, getModalStyle } from '../styles/materialui'
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const EditProfileModal = ({ avatar, displayname, setUser, open, handleClose }) => {
    const [modalStyle] = useState(getModalStyle);
    const [fileLocalURL, setFileLocalURL] = useState(null)
    const [file, setFile] = useState(null)  
    const [displaynameValue, setDisplaynameValue] = useState(displayname)
    const [passwordValue, setPasswordValue] = useState('')
    const [savingLoading, setSavingLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showSnackbarBool, setShowSnackbarBool] = useState(false);
    

    const classes = modalStyles();

    const onDisplayNameChanged = text => event => {
        setDisplaynameValue(event.target.value);        
    }

    const onPasswordChanged = text => event => {
        setPasswordValue(event.target.value);        
    }

    const handleChange = (event) => {        
        if (file) {
            URL.revokeObjectURL(file)
        }
        setFileLocalURL(URL.createObjectURL(event.target.files[0]))
        setFile(event.target.files[0])        
    }

    const onSaveButtonClicked = () => {
        saveAvatar()
    }

    const saveAvatar = async () => {
        setSavingLoading(true)

        var profileObj = {
            displayname: displaynameValue,            
            ...(file !== null && { image: file }),
            ...(passwordValue.length !== 0 && { password: passwordValue })
        }

        const user = await authApi(END_POINTS.updateProfile, {
            method: HTTP_PATCH,
            // body: profileObj
            body: file ? profileObj : JSON.stringify(profileObj)
        })

        setSavingLoading(false)
        setShowSnackbarBool(true)
        setUser(user)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const hideSnackbar = () => {
        setShowSnackbarBool(false)
    }

    const body = (
        <div style={modalStyle} className={classes.paper} >
            <ThemeProvider theme={defaultTheme}>   

            <div class="flex text-left">
                <p class="flex-1 font-bold text-2xl">
                    <FormattedMessage id="edit-profile" />
                </p>
            
                <Button 
                    type="primary"
                    shape="round"                         
                    size="large"
                    disabled={savingLoading}                                                                                        
                    onClick={() => onSaveButtonClicked()}>
                        <div class="flex items-center">
                        {savingLoading ? <LoadingOutlined /> : <SaveIcon />}

                        <div class="pl-2">
                            <FormattedMessage id="save-profile" />
                        </div>                       
                        
                        </div>                                        
                </Button> 
                   
            </div>       

            <div class="relative">
                
                <img src={fileLocalURL ? fileLocalURL : avatar || defaultAvatar}                                     
                    alt="avatar"
                    class="rounded-full w-130px h-130px mx-auto border-solid border-4 border-secondary bg-black opacity-50"
                />
                               
                <div class="absolute inset-y-42p inset-x-47p">
                    <label htmlFor="file-input">                    
                        <div class="flex cursor-pointer hover:bg-secondaryLight rounded-full w-8 h-8 justify-center items-center"><AddAPhotoIcon /></div>                                            
                    </label>

                    <input id="file-input" class="hidden" type="file" onChange={handleChange}/>                                        
                </div>                                                       
            </div>
            <div class="text-left mt-4">
                <p class="mb-0 text-textgray">Set display name</p>
                <Input 
                    placeholder="Display name" 
                    onChange={onDisplayNameChanged('inputText')}
                    value={displaynameValue}
                    />

                <p class="mb-0 text-textgray mt-4">Set password</p>           
                    <Input 
                    placeholder="Password" 
                    type={showPassword ? 'text' : 'password'}
                    onChange={onPasswordChanged('inputText')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />    
            </div>
            <Snackbar
                message={<FormattedMessage id="profile-saved" />}
                open={showSnackbarBool}
                handleClose={hideSnackbar}                
                type="success"
            />
            </ThemeProvider >
        </div>        
    )

    return (
        <Modal
            open={open}
            onClose={handleClose} >
            {body}
        </Modal>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(actions.setUser(user)),         
    }
  }
  
export default connect(null, mapDispatchToProps)(EditProfileModal);
