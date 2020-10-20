import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import React from 'react';
import Menu from '../componentes/Menu';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Routes from '../main/Routes';


export default props => (
  <div className="container">
    <Menu/>
    <Header/>
    <Routes/>
    <Footer/>
  </div>
)
