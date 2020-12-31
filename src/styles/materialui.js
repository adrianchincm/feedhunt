import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiSvgIcon from '@material-ui/core/SvgIcon';

export const defaultTheme = createMuiTheme({
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
      MuiSvgIcon: {
        root: {
            fill: '#fff'
        }        
      },
      MuiButton: {
        root: {
          color: '#fff',
          borderRadius: '24px',
          '&:hover': {
            backgroundColor: "#4398f6"            
          },
        }
      }, 
    },  
    
});

export const backButtonTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSvgIcon: {
      root: {
          fill: '#4398f6',   
      }        
    },
    MuiIconButton: {
      root: {        
        '&:hover': {
          backgroundColor: "rgba(0, 0, 0, 0.1)"            
        },
        '&:focus': {
          outline: 'none',
        }, 
      }
    },   
  },    
});

export const SideBarButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 26,
    padding: '6px 12px',          
    lineHeight: 1.5,
    backgroundColor: 'transparent',              
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },     
    '&:focus': {
      outline: 'none',
    },           
  },
})(Button);

