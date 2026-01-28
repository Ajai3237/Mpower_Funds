import React, { useEffect, useState } from 'react'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { llcData } from '../../constants/llc';
import { incData } from '../../constants/inc';
import { useParams } from 'react-router-dom';
import './slider.css'

const countryMap = {
    us: llcData,
    ca: incData,
};

function AboutSlider() {
    const { countryCode } = useParams();
    const [content, setContent] = useState(llcData);

    useEffect(() => {
        const country = (countryCode || 'us').toLowerCase();
        setContent(countryMap[country] || llcData);
    }, [countryCode]);
    // data collection 

    const groupedData = [];
    const dataArray = content.aboutPageData.history.historySlider;

    for (let i = 0; i < dataArray.length; i += 2) {
        groupedData.push(dataArray.slice(i, i + 2));
    }

    return (
        <div className='aboutPageSlider position-relative'>
            <div className="timeline-line"></div>
            <Swiper
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                modules={[Scrollbar]}
                className="historySlider"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
            >
                {groupedData.map((group, index) => (
                    <SwiperSlide key={index}>
                        {group.map((data, i) => (
                            <div className={`historyData ${i === 0 ? 'up' : 'down'}`} key={i}>
                                <div>
                                    <h1 className="historyYear jakarta">{data.year}</h1>
                                    <p className='text-white mb-0'>{data.text}</p>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AboutSlider;