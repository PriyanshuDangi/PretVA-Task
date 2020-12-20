import React, {useState} from 'react';
import {Dropdown, Button} from 'react-bootstrap';
import classes from './SearchFilter.module.css';

const SearchFilters = (props) => {
    let [quantiy, setQuantity] = useState(null);
    let [cost, setCost] = useState(null);
    let [lead, setLead] = useState(null);
    let [buyer, setBuyer] = useState(null);

    let productNames = props.productNames.map((prod, index) => {
        return (
            <Dropdown.Item as="button" key={index} onClick={() => props.filterClick('product_name*' + prod)}>
                {prod}
            </Dropdown.Item>
        );
    });
    let quantitySubmit = (el) => {
        el.preventDefault();
        props.filterClick('quantity*' + quantiy);
        setQuantity(null);
    };
    let costSubmit = (el) => {
        el.preventDefault();
        props.filterClick('price_rs*' + cost);
        setCost(null);
    };
    let leadSubmit = (el) => {
        el.preventDefault();
        props.filterClick('lead_time*' + lead);
        setCost(null);
    };
    let buyerSubmit = (el) => {
        el.preventDefault();
        props.filterClick('buyer_name*' + buyer);
        setCost(null);
    };
    return (
        <div>
            <div className={classes.filterscontainer}>
                <div className={classes.heading}>Search Filters</div>
                <div className={classes.dropdownContainer}>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Product
                            </Dropdown.Toggle>

                            <Dropdown.Menu>{productNames}</Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Quantity
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <form className={classes.forms} onSubmit={quantitySubmit}>
                                    <input
                                        type="number"
                                        placeholder="Enter Quantity in mtrs"
                                        min="0"
                                        required={true}
                                        onChange={(ele) => setQuantity(ele.target.value)}></input>
                                    <button>Apply</button>
                                </form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Cost
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <form className={classes.forms} onSubmit={costSubmit}>
                                    <input
                                        type="number"
                                        placeholder="Enter Cost in Rs"
                                        min="0"
                                        required={true}
                                        onChange={(ele) => setCost(ele.target.value)}></input>
                                    <button>Apply</button>
                                </form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Lead Time
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <form className={classes.forms} onSubmit={leadSubmit}>
                                    <input
                                        type="number"
                                        placeholder="Enter Lead Time in months"
                                        min="0"
                                        required={true}
                                        onChange={(ele) => setLead(ele.target.value)}></input>
                                    <button>Apply</button>
                                </form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Rating
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as="button">&#9733; &#9733; &#9733; &#9733; &#9733;</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className={classes.dropdownButton}>
                                Location
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as="button">Bengaluru</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className={classes.applyFilters}>
                        <Button variant="outline-secondary" className>
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.searchContainer}>
                <form onSubmit={buyerSubmit}>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                @
                            </span>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search Buyer Requirements"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(ele) => setBuyer(ele.target.value)}
                        />
                        <Button variant="outline-dark" className={classes.buyerButton} type="submit">
                            Search Buyer
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchFilters;
