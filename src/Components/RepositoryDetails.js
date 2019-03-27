import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CustomButton from './CustomButton';
import axios from 'axios';
import { getLocalStorageRepos } from './local/localrepo';

const TOKEN = require('../token.json').TOKEN;

export class RepositoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repository: {}
        };
    }
    handleSubmit = () => {
        this.props.history.push('');
    }

    updateRepo = async (repoId) => {
        if (repoId !== undefined || repoId !== null || repoId !== "") {
            let repo = getLocalStorageRepos().find(item => item.id === Number(repoId));
            if (repo === undefined) {
                repo = await this.getRepositoryDetails(repoId);
            }
            if (repo !== undefined) {
                this.setState({ repository: repo });
            }
        }
    }

    getRepositoryDetails = async (repoId) => {
        try {
            const response = await axios.get(`https://api.github.com/repositories/${repoId}?access_token=${TOKEN}`);
            const repo = response.data;
            return repo;
        }
        catch (exception) {
            console.log(exception);
        }
    }

    componentWillMount() {
        if (this.state.repository.id === undefined) {
            this.updateRepo(this.props.match.params.repoId);
        }
    }

    render() {
        const rep = this.state.repository;
        return (
            <List>
                <ListItem>{rep.name}</ListItem>
                <ListItem>{rep.language}</ListItem>
                <ListItem>{rep.description}</ListItem>
                <ListItem>{rep.created_at}</ListItem>
                <ListItem>{rep.updated_at}</ListItem>
                <ListItem>{rep.url}</ListItem>
                <CustomButton handleSubmit={this.handleSubmit} label="Home" />
            </List>
        )
    }
}