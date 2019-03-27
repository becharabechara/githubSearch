import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({

});

class UserReposList extends Component {

    render() {
        const {repositories} = this.props;
        const {history} = this.props;
        return (
            <div>
                {
                    repositories.map((rep, index) => {
                        return (
                            <ListItem key={index} button onClick={()=>{history.push(`/repository/${rep.id}`)}}>
                                <ListItemText primary={rep.name} />
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default withStyles(styles)(UserReposList);