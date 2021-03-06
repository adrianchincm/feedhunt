import React, {useState, useEffect}  from 'react'
import Input from '@material-ui/core/Input';
import axios from '../shared/axios'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import logo from '../images/square-logo.png';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from '../styles/materialui';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import { LoginOutlined, LoadingOutlined } from '@ant-design/icons';
import * as actions from '../store/actions/index'

const Login = props => {

    const [emailOrUsername, setEmailOrUsername] = useState('test@test.com');
    const [password, setPassword] = useState('testing123');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const onEmailUsernameChanged = text => event => {
        setEmailOrUsername(event.target.value);        
    }

    const onPasswordChanged = text => event => {
        setPassword(event.target.value);        
    }

    const onLoginClicked = () => {        
        setLoading(true)

        var userObj = {
            email: emailOrUsername,            
            password
        }

        axios.post('/users/login', userObj)
        .then(response => {
            setLoading(false)
            window.sessionStorage.setItem("authToken", response.data.token);
            props.setUser(response.data.user)
            props.history.push('/home')
        })
        .catch(error => {
            // console.log("SIGNUP FAILED", error)
            // alert('LOGIN FAIL', error)
            setError(true)
        });    
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (     
        <ThemeProvider theme={defaultTheme}>   
        <div class="p-8 h-screen justify-center max-w-xl mx-auto" > 
                
                <img src={logo} 
                    width="50" 
                    height="50" 
                    alt="logo" 
                    class="mb-4 mx-auto"/>

                <p class="text-3xl font-extrabold">
                    <FormattedMessage
                        id="log-in-to-feedhunt"          
                    />
                </p>                
                <div class="flex flex-col p-8 space-y-8 items-center">
                    <Input placeholder="Email/Username" onChange={onEmailUsernameChanged('inputText')}/>
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
                    {error ? <p class="text-red-500">Incorrect username/email or password</p> : null}                       
                </div>                                                

                <Button 
                    type="primary"
                    shape="round"                         
                    size="large"
                    disabled={loading}                                                                                        
                    onClick={() => onLoginClicked()}>
                        <div class="flex items-center">
                        {loading ? <LoadingOutlined /> : <LoginOutlined />}

                        <div class="pl-2">
                        <FormattedMessage
                        id="login"          
                    />
                        </div>                       
                        
                        </div>                                        
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
  
export default connect(null, mapDispatchToProps)(Login);


