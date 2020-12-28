import React, {useState, useEffect} from 'react'
import Input from '@material-ui/core/Input';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { customInput } from '../styles/materialui';
import {FormattedMessage} from 'react-intl';
import logo from '../images/square-logo.png';
import axios from '../shared/axios'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index'

const Signup = props => {

    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('testing123');
    const [username, setUsername] = useState('tester');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onEmailChanged = text => event => {
        setEmail(event.target.value);        
    }

    const onPasswordChanged = text => event => {
        setPassword(event.target.value);        
    }

    const onUsernameChanged = text => event => {
        setUsername(event.target.value);        
    }
    
    const onSignupClicked = () => {
        // alert(email)
        var userObj = {
            email,
            username,
            password
        }

        axios.post('/users', userObj)
        .then(response => {
            // console.log("ORDER SUCCESS", response.data)
            window.sessionStorage.setItem("authToken", response.data.token);
            props.setUser(response.data.user)
            props.history.push('/home')
        })
        .catch(error => {
            // console.log(error.response.data)
            handleSignupError(error.response.data)
        });    
    }

    const handleSignupError = error => {
        if (error.errors && 'password' in error.errors) {
            return setErrorMessage('Password needs to be more than 7 characters')
        } else {
            if ('email' in error.keyPattern) {
                return setErrorMessage('Email is taken')
            } else if ('username' in error.keyPattern) {
                return setErrorMessage('Username is taken')
            }
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (     
        <ThemeProvider theme={customInput}>   
        <div class="p-8 justify-center max-w-xl mx-auto" > 
                <img src={logo} 
                    width="50" 
                    height="50" 
                    alt="logo" 
                    class="mb-4 mx-auto"/>

                <p class="text-3xl font-extrabold">
                    <FormattedMessage
                        id="create-your-account"          
                    />
                </p>                
                <div class="flex flex-col p-8 space-y-8 items-center">
                    <Input placeholder="Email" onChange={onEmailChanged('inputText')}/>
                    <Input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password" 
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
                          }/>
                    <Input placeholder="Username" onChange={onUsernameChanged('inputText')}/>

                    {errorMessage ? <p class="text-red-500">{errorMessage}</p> : null}
                </div>                
                
                    <Button type="primary" shape="round" size="large" block onClick={() => onSignupClicked()}>
                        <FormattedMessage
                            id="signup"          
                        />
                    </Button>                        
                
        </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(actions.setUser(user)),         
    }
  }
  
export default connect(null, mapDispatchToProps)(Signup);