import React from 'react';
import UserImg from '../../assets/image/profile.png';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.box1}>
                <img className={classes.userImg} src={UserImg} alt="profile" />
                <div>
                    <b>{props.info.buyer_name}</b>
                    <div className={classes.company}>Buyer, Sunshine Apparel Pvt. Limited</div>
                    <div>Bangalore, Karnataka , India</div>
                </div>
            </div>
            <div className={classes.box2}>
                <div className={classes.requirement}>
                    <b>Requirement : </b>
                    <div>
                        <span> Posted: March 2, 2020</span>
                        <br />
                        <span> Expires: July 2, 2020</span>
                    </div>
                </div>
                <div>
                    <b>Fabric : </b>
                    <span>{props.info.product_name}</span>
                </div>
                <div className={classes.weiandquan}>
                    <div>
                        <b>Weight : </b>
                        <span> {props.info.weight_gsm} gsm</span>
                    </div>
                    <div>
                        <b>Quantity : </b>
                        <span> {props.info.quantity} mtrs</span>
                    </div>
                </div>
                <div>
                    <b>Cost Bracket : </b>
                    <span>INR {props.info.price_rs}</span>
                </div>
                <div>
                    <b>Lead Time Provision : </b>
                    <span>{props.info.lead_time} months</span>
                </div>
                <div>
                    <b>Delivery Location : </b>
                    <span>New Delhi, India</span>
                </div>
            </div>
            <div className={classes.box3}>
                <div className={classes.icons}>
                    <i class="far fa-user"></i>
                </div>
                <div className={classes.icons}>
                    <i class="far fa-comment-alt"></i>
                </div>
                <div className={classes.icons}>
                    <i class="fas fa-share-alt"></i>
                </div>
                <div className={classes.icons}>
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
        </div>
    );
};

export default Card;
