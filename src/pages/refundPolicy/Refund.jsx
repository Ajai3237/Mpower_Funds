import React, { useEffect, useState } from 'react';
import './refund.css';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { FaCheckCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';


const countryMap = {
    us: llcData,
    ca: incData,
};


const Refund = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);

    const data = content.refund;
    const basePath = countryCode ? `/${countryCode}` : '';
    // data collection


    return (
        <section className="tersSection">
            <div className="container">
                <h1 className="heading text-center">{data.heading}</h1>
                {/* <p className="fs-5 mt-4 fw-semibold updatesOn">Last Updated: {data.updtaeOn}.</p> */}
                <p className="py-4 border-bottom mb-sm-5 ">{data.description}</p>

                {data.policy.map((item, index) => (
                    <div key={index} className='termsBox'>
                        <h1 className="termsHead">{`${index + 1}. `}{item.heading}</h1>
                        <p className="termsDesc ">{item.description}</p>
                        <ul className="list-unstyled mb-3">
                            {item.points.map((data, index) => (
                                <li key={index} className='d-flex gap-2'><FaCheckCircle /><span>{data}</span></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Refund
