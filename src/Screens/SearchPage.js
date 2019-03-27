import React, { Component, Fragment } from 'react';
import SearchForm from '../Components/SearchForm';
import UserReposList from '../Components/UserReposList'
import UserDetails from '../Components/UserDetails'
import axios from 'axios';
import { setLocalStorageRepos } from '../Components/local/localrepo';

const TOKEN = require('../token.json').TOKEN;

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: {
                name: "",
                photo: ""
            },
            repositories: []
        }
    }

    getUserRepos = async username => {
        try {
            if(username !== "" || username !== undefined || username !== null){
                const response = await axios.get(`https://api.github.com/users/${username}?access_token=${TOKEN}`);
                const result = response.data;
                if (result.login !== undefined) {
                    const reponse = await axios.get(`https://api.github.com/users/${username}/repos?access_token=${TOKEN}`);
                    const repos = reponse.data;
                    this.setState({
                        loggedUser: {
                            name: result.login,
                            photo: result.avatar_url
                        },
                        repositories: repos.map(rep => {
                            return {
                                id: rep.id,
                                name: rep.name,
                                language: rep.language,
                                description: rep.description,
                                created_at: rep.created_at,
                                updated_at: rep.updated_at,
                                url: rep.url
                            };
                        })
                    });
                    setLocalStorageRepos(this.state.repositories);
                }
            }
        }
        catch (exception) {
            console.log(exception);
        }
    }
    render() {
        return (
        <div>
                <SearchForm handleSubmit={this.getUserRepos} {...this.props}/>
                <Fragment>
                    {
                        this.state.loggedUser.name === "" ?
                            null
                            : <Fragment>
                                <UserDetails loggedUser={this.state.loggedUser} {...this.props}/>
                                <UserReposList repositories={this.state.repositories} sendRepositoryDetails={this.props.sendRepositoryDetails} {...this.props} />
                            </Fragment>
                    }
                </Fragment>
        </div>
        )
    }
}

export default SearchPage;