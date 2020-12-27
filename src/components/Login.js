import React, {useState, useEffect}  from 'react'
import Input from '@material-ui/core/Input';
import axios from '../shared/axios'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { customInput } from '../styles/materialui';
import {FormattedMessage} from 'react-intl';

const Login = () => {

    const [emailOrUsername, setEmailOrUsername] = useState('test@test.com');
    const [password, setPassword] = useState('testing123');
    const [showPassword, setShowPassword] = useState(false);

    const onEmailUsernameChanged = text => event => {
        setEmailOrUsername(event.target.value);        
    }

    const onPasswordChanged = text => event => {
        setPassword(event.target.value);        
    }

    const onLoginClicked = () => {        
        var userObj = {
            email: emailOrUsername,            
            password
        }

        axios.post('/users/login', userObj)
        .then(response => {
            // console.log("ORDER SUCCESS", response.data)
            alert('LOGIN SUCCESS')
        })
        .catch(error => {
            console.log("SIGNUP FAILED", error)
            alert('LOGIN FAIL', error)
        });    
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (     
        <ThemeProvider theme={customInput}>   
        <div class="p-3 justify-center max-w-xl mx-auto" > 
                
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
                </div>                
                
                <Button type="primary" shape="round" size="large" block onClick={() => onLoginClicked()}>
                <FormattedMessage
                        id="login"          
                    />
                </Button>                        
                
        </div>
        </ThemeProvider>
    );
}

export default Login;

