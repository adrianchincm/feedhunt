import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
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

export const whiteButtonTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSvgIcon: {
      root: {
          fill: '#fff',   
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

export const modalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height: 1000,
    backgroundColor: '#282c34',
    border: '2px solid #393f4a',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
    zIndex: '20'
  },
}));

export function getModalStyle() {
  return {
      top: '50%',
      left: '55%',
      transform: `translate(-50%, -55%)`,
  };
}

