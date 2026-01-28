import React from 'react';
import './error.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Error = () => {
    const { countryCode } = useParams();
    const basePath = countryCode ? `/${countryCode}` : '';

    // data collection 

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <section className="errorSection">
                <div className="container">
                    <h1 className="bannerHeader roboto  text-center">ERROR</h1>
                    <p className="text-center fs-5 pt-4 mt-sm-4">
                        The page you are trying to access doesn't exist or has been moved.
                    </p>
                    <div className="btnBox">
                        <Link to={`${basePath}/`} className='button justify-content-end'>
                            Homepage
                            <div>
                                <FaArrowRight />
                            </div>
                        </Link>

                        <button
                            className='button button1 justify-content-end bg-transparent'
                            onClick={handleGoBack}>
                            Go Back
                            <div>
                                <FaArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
