import React , {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userName} from '../redux/user'
import {useHistory} from 'react-router-dom';

const Home =(props)=>{
   const [user,setUser] = useState('');
   const [password,setPassword] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();
    
   const onSubmit = (e)=>{
    e.preventDefault();
       dispatch(userName(user))
       history.push('/dashboard');
   }

    return(
        <div>
           <form className="login-container" onSubmit={onSubmit}>
               <div className="enterUser">
                <label for="username"  >Username</label>
                <input type="text"  id="username" value={user} onChange={e=>setUser(e.target.value)} />
                </div>
                <div className="enterPassword">
                <label for="password" > Password</label>
                <input type="password"  id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
            <button type="submit" className="submit-btn" >Submit</button>
         </form>
        </div>
    )
}

export default Home;