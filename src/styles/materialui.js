import { createMuiTheme } from '@material-ui/core/styles';

export const customInput = createMuiTheme({
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