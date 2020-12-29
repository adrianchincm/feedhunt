import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import logo from '../images/feedhunt-logo.png';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from 'antd';
import {FormattedMessage} from 'react-intl';

const LandingPage = props => {
    
    const onSignupClicked = () => {
        props.history.push('/signup')
    }

    const onLoginClicked = () => {
        props.history.push('/login')
    }

    return (
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="flex items-center h-screen bg-gradient-to-l from-secondary to-textgray">
                <div class="mx-auto">
                    <div class="flex">
                        <SearchIcon />
                        <p class="font-bold text-xl ml-2">Find the best deals</p>
                    </div>

                    <div class="flex">
                        <ShareIcon />
                        <p class="font-bold text-xl ml-2">Share your own discoveries</p>
                    </div>

                    <div class="flex">
                        <DynamicFeedIcon />
                        <p class="font-bold text-xl ml-2">Get the latest updates</p>
                    </div>                                                
                </div>                
            </div>

            <div class="relative flex items-center h-screen">
                <div class="mx-auto max-w-sm text-left">
                    <img src={logo} alt="logo" class="mb-4"/>                                            
                    <p class="font-bold text-3xl ml-2 mb-16">Start hunting for the best deals around now</p>
                    
                    <p class="font-bold text-xl ml-2 mb-2">Join Feedhunt now</p>

                    <Button type="primary" shape="round" size="large" block onClick={() => onSignupClicked()}>
                        <FormattedMessage
                            id="signup"          
                        />
                    </Button> 

                    <div class="mb-4" />

                    <Button type="secondary" shape="round" size="large" block onClick={() => onLoginClicked()}>
                        <FormattedMessage
                            id="login"          
                        />
                    </Button>                     

                    <div class="absolute bottom-0"><p class="text-textgray">Created by Adrian Chin</p></div>
                </div> 

                
            </div>            
        </div>        
    );
}

export default LandingPage;