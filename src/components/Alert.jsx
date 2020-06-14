import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';



     function SimpleAlerts() {
        const useStyles = makeStyles((theme) => ({
            root: {
              width: '100%',
              '& > * + *': {
                marginTop: theme.spacing(2),
              },
            },
          }));
                const classes = useStyles();
                console.log("function is heere")
                 return (
                <div className={classes.root}>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                </div>
            );
}

export default SimpleAlerts;