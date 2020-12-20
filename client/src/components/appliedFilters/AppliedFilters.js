import React from 'react';
import classes from './AppliedFilters.module.css';

const AppliedFilters = (props) => {
    let filter = null;
    if (props.filter) {
        filter = (
            <div>
                {props.filter}
                <button onClick={props.clearFilter}>x</button>
            </div>
        );
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>Search Filters :</div>
            <div className={classes.appliedFilters}>
                {filter}
                <div>
                    5 &#9733;
                    <button>x</button>
                </div>
                <div>
                    Bengaluru
                    <button>x</button>
                </div>
                <div className={classes.clearAll}>
                    <button onClick={props.clearFilter}>Clear All</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedFilters;
