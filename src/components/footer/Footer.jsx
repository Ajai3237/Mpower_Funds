import React, { useEffect, useState } from 'react';
import './footer.css';
import { Link, useParams } from 'react-router-dom';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { FaArrowUp } from 'react-icons/fa';

const countryMap = {
    us: llcData,
    ca: incData,
};

const Footer = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    //data collected
    const basePath = countryCode ? `/${countryCode}` : '';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>

            <footer className='text-white position-relative'>
                <div className="container footerTop">
                    <div>
                        <Link to={`${basePath}/`} className="footerImgBox">
                            <img src={content.FooterData.footerLogo} alt="Logo" className="object-fit-content" />
                        </Link>
                        <p className="footSubTitle mb-0 py-3">
                            {content.FooterData.subTitle}
                        </p>
                        <div className="d-flex footerSocial">
                            {content.FooterData.socialLink.map((link, index) => {
                                const Icon = link.icon;
                                return (<Link
                                    key={index}
                                    to={link.path}
                                    target='_blank'
                                    className="rounded-circle border-white border">
                                    <Icon />
                                </Link>)
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footLinkHead">
                            Quick Links
                        </div>
                        <ul className="list-unstyled">
                            {content.FooterData.quickLinks.map((data) => (
                                <li key={data.path}>
                                    <Link
                                        to={`${basePath}${data.path}`}
                                        className='footerNav text-decoration-none'>
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="footLinkHead">
                            Legal
                        </div>
                        <ul className="list-unstyled">
                            {content.FooterData.legal.map((data) => (
                                <li key={data.path}>
                                    <Link
                                        to={`${basePath}${data.path}`}
                                        className='footerNav text-decoration-none'>
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="footLinkHead">
                            Contact
                        </div>
                        <div className="pb-2 addressFoot">{content.FooterData.address.address}</div>
                        <ul className="list-unstyled">
                            <li >
                                <a
                                    href={`tel:${content.FooterData.address.tel}`}
                                    className='footerNav text-decoration-none'>
                                    {content.FooterData.address.tel}
                                </a>
                            </li>
                            <li >
                                <a
                                    href={`mailto:${content.FooterData.address.mail}`}
                                    className='footerNav text-decoration-none text-lowercase'>
                                    {content.FooterData.address.mail}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="container text-center">
                        <div className="mb-3">
                            ©{new Date().getFullYear()} Mpowerfunds. All rights reserved.
                        </div>
                        {/* <p>{content.FooterData.disclaimer}</p> */}
                    </div>
                </div>

            </footer>
            {isVisible && (
                <div className="backToTop rounded-circle text-white " onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </>
    )
}

export default Footer
