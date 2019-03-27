import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import TextInput from './TextInput';
import CustomButton from './CustomButton'

const styles = {
    formRoot: {
        padding: '2px 4px',
        display: 'flex',
        justifyContent: 'center',
        margin:'auto'
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue : ""
        }
    }
    handleChange = key => value => {
        this.setState({
            [key]: value
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.formRoot}>
                <IconButton className={classes.iconButton} aria-label="Search" onClick={()=>this.handleChange('searchValue')("")}>
                    <RefreshIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <TextInput handleChange={this.handleChange('searchValue')} searchValue={this.state.searchValue}/>
                <Divider className={classes.divider} />
                <CustomButton label="search" handleSubmit={()=>this.props.handleSubmit(this.state.searchValue)}/>
            </Paper>
        );
    }
}
export default withStyles(styles)(SearchForm);