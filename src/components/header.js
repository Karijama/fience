import React, { Component } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../static/logo.svg';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

import Home from '../pages/Home.js';
import Regis from '../pages/Regis';
import Enter from '../pages/Enter';
import Catalog from '../pages/catalog';
import Cat from '../pages/zakaz';

function Header() {

    return (
        <div className="font-body ">
            <Navbar collapseOnSelect expand='md' className='bg-white' fixed=''>
                <Container fluid>
                    <NavbarBrand>
                        <a href='/'><img src={logo}
                            height="50px"
                            width="200px"
                            className='align-middle d-inline-block ml-8'
                            alt='logo'/></a>
                    </NavbarBrand>
                    <NavbarToggle aria-controls='responsive-navbar-nav' />
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                        <NavLink className='my-auto' href='/catalog'><a className='mr-10 text-black hover:bg-green-400 text-base transition ease-in-out duration-200 rounded font-head'>Сделать заказ</a></NavLink>
                            <NavLink className='my-auto' href='/zakaz'><a className='mr-10 text-black hover:bg-green-400 text-base transition ease-in-out duration-200 rounded font-head'>Каталог</a></NavLink>
                            <NavLink className='my-auto'><a className='mr-10 text-black hover:bg-green-400 text-base transition ease-in-out duration-200 rounded font-head'>г.Якутск</a></NavLink>
                            <NavLink href='/enter'><button as='a' className='active:bg-green-200 font-head focus:outline-none focus:ring h-12 w-32 bg-green-400 rounded transition text-black hover:bg-green-100 hover: ring-green-600 ease-in-out duration-500 mr-10'>Войти</button></NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/reg' element={<Regis />} />
                    <Route path='/enter' element={<Enter/>} />
                    <Route path='/catalog' element={<Catalog/>} />
                    <Route path='/zakaz' element={<Cat />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Header;
