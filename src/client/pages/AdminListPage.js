import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requiredAuth from "../components/hocs/requiredAuth";

class AdminListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdminList() {
        return this.props.admins.map((admin)=>{
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render(){
        return(
            <div>
                <h3>This admins list is protected!</h3>
                <ul>
                    {this.renderAdminList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({admins})  {
    return {admins};
}

export default {
    loadData: ({dispatch}) => dispatch(fetchAdmins()),
    component:connect(mapStateToProps,{fetchAdmins})(requiredAuth(AdminListPage))
   
}