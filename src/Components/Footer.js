import React from "react";
import Logo from "../Components/Assets/Logo.jpg"

const Footer = () => {
    return (
        <div>
            <div class="footer-logo">
                <img src ={ Logo } alt="Little Lemon's Logo" width="250"/>
            </div>
            <div class="footer-content">
                <div class="locations">
                    <h4>LOCATIONS</h4>
                    <ul>
                        <li>Accra</li>
                        <li>Kumasi</li>
                        <li>Cape Coast</li>
                        <li>Tamale</li>
                    </ul>
                </div>
                <div class="opening-times">
                    <h4>OPENING TIMES</h4>
                    <ul>
                        <li>Mon - Wed: 10:30am - 10:00pm</li>
                        <li>Fri: 12:00pm - 11:00pm</li>
                        <li>Sat - Sun: 9:30am - 9:00pm</li>
                    </ul>
                </div>
                <div class="contact">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>Address: 102 Formalis Ave, South Row - Accra</li>
                        <li>Phone: 030 3441 7622</li>
                        <li>Email: thelittlelemon@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <h6>© 2023 Little Lemon Ltd. All rights reserved.</h6>
            </div>
        </div>

    )
}

export default Footer;