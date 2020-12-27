import React from 'react'
import Input from '@material-ui/core/Input';
import { Button } from 'antd';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const Signup = () => {

  const customInput = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiInput: {
          root: {            
              color: '#fff', 
              fontSize: 20,
              width: 500             
          },
          underline: {
            "&:before": {
                borderBottom: '1px solid #818589',                        
            },
            '&:hover:not($disabled):before': {
                borderBottom: '1px solid #818589',                        
            },
          }   
      },
    },
    });

    return (     
        <ThemeProvider theme={customInput}>   
        <div class="p-3 justify-center max-w-xl mx-auto" > 
                
                <p class="text-3xl font-extrabold">Create your account</p>                
                <div class="flex flex-col p-8 space-y-8 items-center">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Display name" />
                </div>                
                
                    <Button type="primary" shape="round" size="large" block>
                        Signup
                    </Button>                        
                
        </div>
        </ThemeProvider>
    );
}

export default Signup;

