import React from 'react'
import { useNavigate } from 'react-router-dom';
export const LoginButton = () => {
    const navigate = useNavigate();

      const handleGoLogin = () => {
        navigate('/login');
      };
    
  return (
    <div className='flex justify-around gap-1'> 
        <button onClick={handleGoLogin} className='text-zinc-800 text-lg font-bold pr-5'>Login</button>
    </div>
  )
}
