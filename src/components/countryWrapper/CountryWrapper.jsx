
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Error from '../../pages/error/Error';


const allowedCountries = ['ca', 'us']; // Only valid country codes

const CountryWrapper = () => {
    const { countryCode } = useParams();

    if (!allowedCountries.includes(countryCode?.toLowerCase())) {
        return <Error />;
    }

    return <Layout />;
};

export default CountryWrapper;
