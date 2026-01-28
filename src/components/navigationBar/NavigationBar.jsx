import React, { useCallback, useEffect, useRef, useState } from 'react';
import './navigation.css';
import { icons } from '../../constants/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import { llcData } from '../../constants/llc.js';
import { incData } from '../../constants/inc.js';
import { Dropdown } from 'react-bootstrap';

const countryMap = {
    us: llcData,
    ca: incData,
    default: llcData
};

const NavigationBar = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || countryMap.default);
    }, [countryCode]);

    const basePath = countryCode ? `/${countryCode}` : '';
    // data collection 

    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const isActive = useCallback((path) => {
        const fullPath = countryCode ? `/${countryCode}${path}` : path;
        return pathname === fullPath ? "active" : "";
    }, [pathname, countryCode]);

    const handleToggle = useCallback(() => setIsOpen(prev => !prev), []);
    const closeNav = useCallback(() => setIsOpen(false), []);

    // Collapse menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed-top ${isScrolled || isOpen ? 'bluredBack' : ''} `} ref={navRef} >
            <nav className="navbar navbar-expand-xxl">
                <div className="container">
                    <Link className="navbar-brand" to={basePath || '/'}>
                        <img src={content.navLogo} alt="Logo" className='navLogo' />
                    </Link>
                    <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        className={`navbar-toggler hamburger ${isOpen ? 'toglerChecked' : 'collapsed'}`}
                        onClick={handleToggle}>
                        <svg fill="none" viewBox="0 0 50 50" height={30} width={30}>
                            <path className="lineTop line" strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 11L44 11" />
                            <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 24H43" className="lineMid line" />
                            <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 37H43" className="lineBottom line" />
                        </svg>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav">
                            {content.menu.map((menu) => (
                                // menu.name === 'Services' ?
                                //     (
                                //         <HashLink key={menu.path} smooth to={`${basePath}${menu.path}`} className="nav-link fw-semibold" onClick={closeNav}>
                                //             Services
                                //         </HashLink>
                                //     ) : (
                                <li className="nav-item" key={menu.path}>
                                    <Link
                                        className={`nav-link fw-semibold ${isActive(menu.path)}`}
                                        aria-current="page"
                                        to={`${basePath}${menu.path}`}
                                        onClick={closeNav}>
                                        {menu.name}
                                    </Link>
                                </li>
                                // )
                            ))}
                        </ul>
                        <ul className="list-unstyled lastMenu m-0">
                            <li className="nav-item">
                                <a className="button nav-link " href={`tel:${content.navLast.number}`}>
                                    <div>
                                        <img src={icons.call} alt="call" />
                                    </div>
                                    {content.navLast.name}

                                </a>
                                {/* <Link to={countryCode ? '/' : '/ca'} className='flagLink'>
                                </Link> */}
                                <Dropdown className="flagLink">
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        <img src={content.flag} alt="Current flag" className='flagUsa' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item >
                                            <img src={content.flag} alt="Current flag" className='flagUsa' />
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to={countryCode ? '/' : '/ca'}>
                                            <img
                                                src={countryCode === 'ca' ? llcData.flag : incData.flag}
                                                alt="Toggle flag"
                                                className='flagUsa'
                                            />
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar
