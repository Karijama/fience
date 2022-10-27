import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../static/logo1.svg';
import yan from '../static/yan.svg';
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../firebase-config'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../AuthContext'
import {useState} from 'react'

function Login(){


    return(
        <div className='pb-5'>
            <Container>
                <div className=''><img src={logo} className="mx-auto" /></div>
                <div className=''><h1 className='text-center mt-5 font-head text-4xl'>Вход</h1></div>
                <div className='flex font-head justify-center mt-5 align-baseline'>
                    <p className='text-3xl mr-5'>Нет аккаунта?&nbsp;</p>
                    <a href='/reg' className='text-green-500 text-3xl no-underline'>Зарегистрируйтесь</a>
                </div>
                <div className='flex'>
                    
                </div>
                <div className='flex justify-between'>
                    <div className='bg-gray-400 h-1 w-72'></div>
                    <p className='text-2xl text-center font-head text-gray-400'>или</p>
                    <div className='bg-gray-400 h-1 w-72'></div>
                </div>
                <div className=''>
                    <form className='col-6 mx-auto' name="login_form">
                        <div className='text-center'><input type='email' required className='rounded col-12 border border-black' style={{height: 50}} placeholder='Электронная почта'/></div>
                        <div className='text-center mt-3'><input  type='password' required className='rounded col-12 border border-black' style={{height: 50}} placeholder='Пароль'/></div>
                        <div className='text-end mt-3'><a className='text-green-400 no-underline ml-auto'>Забыли пароль?</a></div>
                        <div className='text-center mt-4'><button type='submit' className='active:bg-green-200 col-5 font-head pt-3 pb-3 ps-5 pe-5 focus:outline-none focus:ring 
                bg-green-400 rounded transition text-black hover:bg-green-100 hover: ring-green-600 ease-in-out duration-500'>Войти</button></div>
                    </form>
                    
                </div>
                
            </Container>
        </div>
    )
}
export default Login;
