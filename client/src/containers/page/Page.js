import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Hr from '../../components/hr/Hr';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import NavButtons from '../../components/navButtons/NavButtons.js';
import SearchFilters from '../../components/searchFilters/SearchFilters';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';
import axios from 'axios';
import classes from './Page.module.css';
import AppliedFilters from '../../components/appliedFilters/AppliedFilters';

const Page = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all*true');
    useEffect(() => {
        setLoading(true);
        const filt = filter.split('*');
        let url = '/api/product?' + filt[0] + '=' + filt[1];
        axios
            .get(url)
            .then((response) => {
                setLoading(false);
                setError(null);
                // console.log(response.data);
                setProducts(response.data);
                if (allProducts.length === 0) {
                    setAllProducts(response.data);
                }
            })
            .catch((err) => {
                setLoading(false);
                setError('Unable to find the requested products');
                console.log(err);
            });
    }, [filter, allProducts]);
    let cards;
    if (loading) {
        cards = <div>Loading...</div>;
    } else if (error) {
        cards = <div>{error}</div>;
    } else if (products) {
        cards = products.map((prod, index) => {
            return <Card info={prod} key={index} />;
        });
    }
    let productNames = [];
    if (allProducts) {
        allProducts.forEach((prod) => {
            if (productNames.indexOf(prod.product_name) === -1) {
                productNames.push(prod.product_name);
            }
        });
    }
    const filterClick = (fil) => {
        console.log(fil);
        if (filter !== fil) {
            setFilter(fil);
        }
    };
    let appliedFiterProps = null;
    if (filter !== 'all*true') {
        if (filter.split('*')[0] === 'quantity') {
            appliedFiterProps = filter.split('*')[1] + ' mtrs';
        } else if (filter.split('*')[0] === 'price_rs') {
            appliedFiterProps = filter.split('*')[1] + ' Rs';
        } else if (filter.split('*')[0] === 'lead_time') {
            appliedFiterProps = filter.split('*')[1] + ' months';
        } else {
            appliedFiterProps = filter.split('*')[1];
        }
    }
    const clearFilter = () => {
        if (filter !== 'all*true') {
            setFilter('all*true');
        }
    };
    return (
        <React.Fragment>
            <Header />
            <Hr />
            <Breadcrumb />
            <NavButtons />
            <SearchFilters productNames={productNames} filterClick={filterClick} />
            <AppliedFilters filter={appliedFiterProps} clearFilter={clearFilter} />
            <div className={classes.cards}>{cards}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Page;
