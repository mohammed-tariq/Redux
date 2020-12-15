import React from 'react';
import {useSelector} from 'react-redux'
import Sidebar from '../components/sidebar'

const Dashboard =()=>{

    const users = useSelector(state=>state.user)
    const {user} = users;

    return(
        <div>
            <Sidebar />
        <div className="dashboard">
            <h2> hello {user} , Welcome is dashboard </h2>
        </div>
        </div>
    )
}

export default Dashboard;