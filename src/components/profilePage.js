import React from 'react';
import Sidebar from '../components/sidebar'
import {useSelector} from 'react-redux'


const ProfilePage =()=>{

    const users = useSelector(state=>state.user)
    const {user} = users;

    return(
        <div>
            <Sidebar />
       
        <div className="profilePage">
        <h2>Hello {user} , Welcome to Profile page</h2>
        </div>
        </div>
    )
}

export default ProfilePage;