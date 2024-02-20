import React, { useEffect } from 'react'
import './Login.css'
import { useState } from 'react'
import user_icon from '../assets/images/person.png'
import email_icon from '../assets/images/email.png'
import password_icon from '../assets/images/password.png'
import { Link} from 'react-router-dom'
import {useTeacherloginMutation} from '../store/api/teacherApi'
import { useChildloginMutation } from '../store/api/childApi'
interface Role{
    role:string
}
const Login:React.FC<Role> = (props) => {
    const [action, setAction] = useState<string>("Login");
    const [logState,setLogState]=useState<boolean>(true);
    const [password,setPassword]=useState<string>('');
    const [email,setEmail]=useState<string>('');
    const [name,setName]=useState<string>('Amit');
    const handleSubmit=async()=>{
        setLogState(!logState);
    }
    useEffect(()=>{
        
    },[logState])
    
    if(logState){
        return (
            <div className='container'>
          <div className='headerLog'>
              <div className='text'>{action}</div>
              <div className='underline'></div>
  
              </div>
  
              <div className='inputs'>
                  {action==="Login"?<div></div>: 
                      
                      <div className='input'>
                          <img src={user_icon} alt='user icon' />
                          <input type='text' placeholder='Username' />
                      </div>
                  }
             
  
              <div className='input'>
                  <img src={email_icon} alt='user icon' />
                  <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
  
              <div className='input'>
                  <img src={password_icon} alt='user icon' />
                  <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
              </div> 
          </div>
  
          <div className="submit-container">
              <Link className='removeDecor' to={`/api/${props.role}/signup`}><div className={action==="Login"? "submit gray":"submit"} >Sign Up</div></Link>
              <div onClick={handleSubmit} className={action==="Sign Up"? "submit gray":"submit"} >Login</div>
          </div>
          </div>
        )
    }
    
        return (<div className='responseDiv'>
            <h1>Hello , You are welcomed {name}</h1>
        </div>)
}

export default Login