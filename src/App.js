import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import SearchPage from './Screens/SearchPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RepositoryDetails } from './Components/RepositoryDetails';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'flex',
    flexDirection:'column',
    margin:'auto'    
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: []
    }
  }
  sendRepositoryDetails = (rep) => {
    console.log("toto")
    this.setState({
      repository: rep
    })
  }
  render() {
    return (
      <div className={this.props.classes.main}>
        <div className="App">
          <CustomNavbar title="Github Search"/>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact render={(props) => <SearchPage sendRepositoryDetails={this.sendRepositoryDetails} {...props} />} />
              <Route path="/repository/:repoId" render={(props) => <RepositoryDetails rep={this.state.repository} {...props} />} />
              <Route render={() => <p>404 Not Found</p>} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
