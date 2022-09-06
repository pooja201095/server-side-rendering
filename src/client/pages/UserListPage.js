import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from 'react-helmet';

class UserList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUserList(){
        return this.props.users.map((user)=>{
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} users loaded`}</title>
                <meta property="og:title" content="User's App"></meta>
            </Helmet>
        );
    }

    render() {
        return <div>
            {this.head()}
            Here is a list of users:
            <ul>{this.renderUserList()}</ul>
        </div>
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}


function mapStateToProps(state) {
    return {
        users:state.users
    }
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(UserList)
}
