import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { customInput } from '../styles/materialui';
import {FormattedMessage} from 'react-intl';

const Signup = () => {

    return (     
        <ThemeProvider theme={customInput}>   
        <div class="p-3 justify-center max-w-xl mx-auto" > 
                
                <p class="text-3xl font-extrabold">
                    <FormattedMessage
                        id="create-your-account"          
                    />
                </p>                
                <div class="flex flex-col p-8 space-y-8 items-center">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Username" />
                </div>                
                
                    <Button type="primary" shape="round" size="large" block>
                        <FormattedMessage
                            id="signup"          
                        />
                    </Button>                        
                
        </div>
        </ThemeProvider>
    );
}

export default Signup;

