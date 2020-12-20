import React, {useEffect, useState} from 'react';
import Card from '../card/Card';
import axios from 'axios';
import classes from './Cards.module.css';

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('/api/product?all=true')
            .then((response) => {
                setLoading(false);
                setError(null);
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
                console.log(err);
            });
    }, []);
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
    return <div className={classes.container}>{cards}</div>;
};

export default Cards;
