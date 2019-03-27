import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    iconButton: {
        padding: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
class CustomButton extends Component {
    render() {
        const { label,classes, handleSubmit, ...truc } = this.props;
        return (
            <Button onClick={handleSubmit} className={classes.button} {...truc}>
            {label}
            </Button>
        )
    }
}
export default withStyles(styles)(CustomButton);