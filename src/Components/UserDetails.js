import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
});
class UserDetails extends Component {
    render() {
        const { name, photo } = this.props.loggedUser;
        return (
        <Chip
            avatar={<Avatar alt="Profile Picture" src={photo} />}
            label={name}
            className={this.props.classes.chip}
        />
        )
    }
}

export default withStyles(styles)(UserDetails);