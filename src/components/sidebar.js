import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
    

const Sidebar =()=>{
    const users = useSelector(state=>state.user)
    const {user} = users;

    return(
        <div className="sidebar">
            <img className="profileImg" src="profile.png"  />
            <div className="userInfo">
                <Link to='/profile' className="user" >{user}</Link>
            </div>
        </div>
    )
}

export default Sidebar;