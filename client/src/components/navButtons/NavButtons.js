import React from 'react';
import {Button} from 'react-bootstrap';
import classes from './NavButtons.module.css';

const NavButtons = () => {
    return (
        <div className={classes.container}>
            <div className={classes.button1}>
                <Button variant="outline-dark">Search Supplier Products</Button>
            </div>
            <div className={classes.button2}>
                <Button variant="outline-dark">Search Buyer Requirements</Button>
            </div>
        </div>
    );
};

export default NavButtons;
