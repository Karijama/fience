import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../static/logo1.svg';
import yan from '../static/yan.svg';
    

class Regis extends Component {
    render() {
        return (
            <div className='pb-10'>
                <Container className='pb-10'>
                    <div className=''><img src={logo} className="mx-auto" /></div>
                    <div className=''><h1 className='text-center mt-5 font-head text-4xl'>Регистрация</h1></div>
                    <div className='flex font-head justify-center mt-5 align-baseline'>
                        <p className='text-3xl mr-5'>Есть аккаунт?&nbsp;</p>
                        <a href='/enter' className='text-green-400 text-3xl no-underline'>Войдите</a>
                    </div>
                    <div className='flex justify-between'>
                        
                    </div>
                    <div className='flex justify-between'>
                        <div className='bg-gray-400 h-1 w-72'></div>
                        <p className='text-2xl text-center font-head text-gray-400'>или</p>
                        <div className='bg-gray-400 h-1 w-72'></div>
                    </div>
                    <div className=''>
                        <form className='col-6 mx-auto'>
                            <div className='text-center'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Фамилия'/></div>
                            <div className='text-center mt-3'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Имя'/></div>
                            <div className='text-center mt-3'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Отчество (если есть)'/></div>
                            <div className='text-center mt-3'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Электронная почта'/></div>
                            <div className='text-center mt-3'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Введите пароль'/></div>
                            <div className='text-center mt-3'><input className='rounded col-12 border border-black' style={{height: 50}} placeholder='Повторите пароль'/></div>
                            <div className='text-center mt-4'><button as="a" href="/profile" className='active:bg-green-200 font-head focus:outline-none focus:ring h-12 
                    bg-green-400 rounded col-5 transition text-black mt-10 hover:bg-green-100 hover: ring-green-600 ease-in-out duration-500'>Зарегистрироваться</button></div>
                        </form>
                    </div>
                    
                </Container>
            </div>
        );
    }
}
export default Regis;
