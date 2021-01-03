import React from 'react';
import MaterialSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {      
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const vertical = 'top'
const horizontal = 'center'

const Snackbar = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
        
        <MaterialSnackbar open={props.open} autoHideDuration={2000} onClose={props.handleClose} anchorOrigin={ { vertical, horizontal } }>
            <Alert onClose={props.handleClose} severity={props.type}>
                {props.message}
            </Alert>
        </MaterialSnackbar>
        {/* <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
}

export default Snackbar