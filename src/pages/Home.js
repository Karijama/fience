import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import rafiki from '../static/rafiki.svg';
import shield from '../static/sheet.svg';
import podlogo from '../static/podlogo.svg';

class Home extends Component {
    render() {
        return (
            <div className=''>
                <Container className='flex -ml-48 max-sm:flex-col'>
                    <div className='mt-36 ml-4 max-xl:mt-20'>
                        <h1 className='font-head text-6xl leading-snug max-sm:text-4xl'>Своя цена, безопасно,<br/> а главное <span className='bg-green-500 translate-y-80'>быстро.</span></h1>
                    </div>
                    <div className='ml-auto'>
                        <img src={rafiki} width='600' className="mt-20 " alt='rafiki' />
                    </div>
                </Container>
                <Container className='justify-between flex mt-24 max-sm:hidden'>
                    <div className='w-52 ml-32 sm:mr-10 sm:ml-10'>
                        <h1 className='text-8xl font-head bg-green-400'>{'>'}2+</h1>
                        <h1 className='text-base'>маршрутов</h1>
                    </div>
                    <div className=' w-54 sm:mr-10'>
                        <h1 className='text-8xl font-head bg-green-400'>{'>'}260</h1>
                        <h1 className='text-base'>клиентов</h1>
                    </div>
                    <div className=' w-52 mr-32 sm:mr-10'>
                        <h1 className='text-8xl font-head bg-green-400'>{'>'}8</h1>
                        <h1 className='text-base'>заказов в день</h1>
                    </div>
                </Container>
                <Container className='mt-24'>
                    <h1 className='font-head text-6xl max-sm:text-4xl'>С нами <span className='bg-green-500 '>безопасно.</span></h1>
                    <Container className='flex justify-between'>
                        <div className='ml-20 mt-20 w-2/5 max-sm:ml-0'>
                            <div>
                                <a className='font-head text-3xl text-black'>Регистрация через документы <br/>утверждающие личность</a>
                                <h1 className='text-base font-body break-normal mt-3'>Lorem ipsum baaari yes fuck da da yesLorem 
                                ipsum baaari yes fuck da da yesLorem ipsum baaari 
                                    yes fuck <br/>da da yesLorem ipsum baaari yes fuck da da yesLorem ipsum baaari yes fuck da da yes</h1>
                            </div>
                            <div>
                                <a className='font-head text-3xl text-black'>Пользовательское соглашение</a>
                                <h1 className='text-base font-body mt-3'>Lorem ipsum baaari yes fuck da da yesLorem ipsum baaari yes fuck da da 
                                yesLorem ipsum baaari 
                                    yes fuck da da <br/> yesLorem ipsum baaari yes fuck da da yesLorem ipsum baaari yes fuck da da yes</h1>
                            </div>
                            <div>
                                <a className='font-head text-3xl text-black'>Видео-инструкция</a>
                                <h1 className='text-base font-body mt-3'>Lorem ipsum baaari yes fuck da da yesLorem ipsum baaari yes fuck da da 
                                yesLorem ipsum baaari 
                                    yes fuck da da  <br/>yesLorem ipsum baaari yes fuck da da yesLorem ipsum baaari yes fuck da da yes</h1>
                            </div>
                        </div>
                        <div className='my-auto ml-20 mr-32'>
                            <img src={shield} width="250" className='max-sm:hidden'/>
                        </div>
                    </Container>
                </Container>
                <Container className='mt-16'>
                    <h1 className='font-head text-6xl max-sm:text-4xl'>Как это работает?</h1>
                    <div className=''>
                        <button className='font-head'>Заказчик</button>
                        <button className='font-head'>Доставщик</button>
                    </div>
                </Container>
                <div style={{backgroundColor: '#272A28'}} className="mt-8">
                    <Container className='pt-10 pb-10'>
                        <div><img src={podlogo} className="mx-auto mt-10"/></div>
                        <div className='flex mt-8 justify-between'>
                            <div>
                                <div><p className='text-white font-head'>GetLet</p></div>
                                <div><a className='text-white no-underline'>Отзывы</a></div>
                            </div>
                            <div className='ml-32'>
                                <div><p className='text-white font-head'>Условия</p></div>
                                <div><a className='text-white no-underline'>Условия конфидециальности</a></div>
                                <div><a className='text-white no-underline'>Условия использования</a></div>
                            </div>
                            <div className='ml-32'>
                                <div><p className='text-white font-head'>Контакты</p></div>
                                <div><a className='text-white no-underline'>Помощь</a></div>
                                <div><a className='text-white no-underline'>Команда</a></div>
                                <div><a className='text-white no-underline'>Вакансии</a></div>
                            </div>
                            <div className='ml-32'>
                                <div><p className='text-white font-head'>Соц.сети</p></div>
                                <div><a href='https://t.me/getlet' className='text-white no-underline'>Телеграм</a></div>
                                <div><a className='text-white no-underline'>Вконтакте</a></div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;
