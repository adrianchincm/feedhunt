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

const Signup = () => {

    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('testing123');
    const [username, setUsername] = useState('tester');
    const [showPassword, setShowPassword] = useState(false);

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
            alert('SIGNUP SUCCESS')
        })
        .catch(error => {
            console.log("SIGNUP FAILED", error)
            alert('SIGNUP FAIL', error)
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

export default Signup;

