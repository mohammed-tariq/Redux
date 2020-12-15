import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar =()=>{
    const users = useSelector(state=>state.user)
    const {user} = users;

    return (
        <nav className="navbar">
            <div className="nav-logo">
                 {user.length>1 ? <Link to='/dashboard' className="navlinks">LOGO</Link> : <Link to='/' className="navlinks">LOGO</Link>}
            </div>
            <div className="navPages">
    {user.length>1 ? <Link to='/profile' className="navlinks">@{user}</Link> : <Link className="navlinks">Login</Link>}
            </div>
        </nav>
    )
}

export default Navbar;
