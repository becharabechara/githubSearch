import React, {Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    input: {
        marginLeft: 8,
        flex: 1,
    }
}

class TextInput extends Component{

    onChange= (event) =>{
        this.props.handleChange(event.target.value)
    }
    render(){
        const {searchValue,classes} = this.props;
        return (
            <InputBase className={classes.input} placeholder="Username" onChange={this.onChange} value={searchValue}/>
            //<input placeholder="Username" type="text" value={searchValue} onChange={this.onChange} />
        )
    }
}

export default withStyles(styles)(TextInput);