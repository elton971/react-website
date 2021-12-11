import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';

function NavBar() {

    const [ click, setClick]= useState(false)// inicializamos o useState a false


    const handleClick = ()=>setClick(!click)// esse é o indicador/ funcao para o click do menu_icon
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link  to='/' className="navbar-logo">
                    <MdFingerprint className="navbar-icon"/>
                        ELTON-WEB
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu ative' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Servicos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Produtos
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>
                                        SIGN UP
                                    </Button>
                                 </Link>
                            ):(
                                <Link to='/sign-up'    className='btn-link'>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                    >
                                        SIGN UP
                                    </Button>
                                 </Link>
                                 )}
                        </li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default NavBar
