import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import classes from './Breadcrumb.module.css';

const BreadCrumbs = () => {
    return (
        <Breadcrumb className={classes.breadcrumb}>
            <Breadcrumb.Item href="/">Search</Breadcrumb.Item>
            <Breadcrumb.Item active>Search Buyer Requirement</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumbs;
