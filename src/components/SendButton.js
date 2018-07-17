import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,

    }
})

class SendButton extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Send
                    <Icon className={classes.rightIcon}>send</Icon>
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(SendButton)
