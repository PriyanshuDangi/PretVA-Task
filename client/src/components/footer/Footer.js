import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <div className={classes.container}>
                <div>
                    <b>Get In Touch!</b>
                </div>
                <div>
                    <div>Location</div>
                    <div>Bengaluru, Karnataka, India</div>
                </div>
                <div className={classes.contact}>
                    <div>Contact</div>
                    <div>
                        <a id="mail" href="mailto:support@pretva.com">
                            support@pretva.com
                        </a>
                    </div>
                </div>
                <div>
                    <div>Follow</div>
                    <div className={classes.social}>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>&#169;2020 by PretVA</div>
        </div>
    );
};

export default Footer;
