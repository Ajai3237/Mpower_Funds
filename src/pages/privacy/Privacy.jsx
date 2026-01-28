import React, { useEffect, useState } from 'react';
import './privacy.css';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { useParams } from 'react-router-dom';
import { FaRegHandPointRight } from 'react-icons/fa';
import { HiChevronDoubleRight } from 'react-icons/hi';

const countryMap = {
    us: llcData,
    ca: incData,
};

const Privacy = () => {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);
    const data = content.privacy;

    const basePath = countryCode ? `/${countryCode}` : '';
    // data collection

    return (
        <section className='prvacySection'>
            <div className="container">
                <h1 className="heading text-center">{data.heading}</h1>
                <p className="py-3 mb-sm-5 border-bottom">{data.description}</p>
                <div className='privacyDiv'>
                    <div className="policyBox termsBox">
                        {data.weCollect.policy.map((item, index) => (
                            <div className="policyDivBox" key={index}>
                                <h1 className="termsHead"> {item.heading}</h1>
                                <p className="termsDesc ">{item.description}</p>
                                <ul className="list-unstyled mb-3">
                                    {item.points.map((data, index) => (
                                        <li key={index} className='d-flex gap-2'><HiChevronDoubleRight /><span>{data}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Privacy
