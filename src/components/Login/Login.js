import React from 'react'
import { useReducer, useContext } from 'react';
import { Global } from '../Contexts/Global';
export default function Login() {
    const { setUser } = useContext(Global);
    const reducer = (prev,next) => ({...prev , ...next}) ;
    const [{username,password},setState]= useReducer(reducer, {
        username:'',
        password:''
    });
    const inputChangeHandler=(e) =>{
        // console.log(e.target.value) ;
        const inputName = e.target.name ;
        const value= e.target.value;
        setState({[inputName]: value})
    }
    const onSubmit =(e) => {
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>username
                    <input name='username'  type='text' onChange={inputChangeHandler} />
                </label>
                <label>password
                    <input name='password'  type='password' onChange={inputChangeHandler} />
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}
