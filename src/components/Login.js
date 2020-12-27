import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { customInput } from '../styles/materialui';
import {FormattedMessage} from 'react-intl';

const Login = () => {

    return (     
        <ThemeProvider theme={customInput}>   
        <div class="p-3 justify-center max-w-xl mx-auto" > 
                
                <p class="text-3xl font-extrabold">
                    <FormattedMessage
                        id="log-in-to-feedhunt"          
                    />
                </p>                
                <div class="flex flex-col p-8 space-y-8 items-center">
                    <Input placeholder="Email/Username" />
                    <Input placeholder="Password" />                    
                </div>                
                
                    <Button type="primary" shape="round" size="large" block>
                    <FormattedMessage
                            id="login"          
                        />
                    </Button>                        
                
        </div>
        </ThemeProvider>
    );
}

export default Login;

