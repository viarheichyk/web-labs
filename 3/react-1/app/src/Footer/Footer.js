import React from 'react';
import style from '../Footer/Footer.module.scss';

function Footer() {
    return(
        <footer className={style.footer}>
            <section className={style.main}>
                <div className={style.nav}>
                    <div className={style.nav_block}>
                        <div className={style.nav_block_title}>Information</div>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">The brand</a></li>
                            <li className={style.nav_item}><a href="#">Local stores</a></li>
                            <li className={style.nav_item}><a href="#">Customer service</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <div className={style.nav_block_title}>Why buy from us</div>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Shipping & returns</a></li>
                            <li className={style.nav_item}><a href="#">Sequre shopping</a></li>
                            <li className={style.nav_item}><a href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <div className={style.nav_block_title}>Your account</div>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Sign in</a></li>
                            <li className={style.nav_item}><a href="#">Register</a></li>
                            <li className={style.nav_item}><a href="#">View cart</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <div className={style.nav_block_title}>Lookbook</div>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Latest posts</a></li>
                            <li className={style.nav_item}><a href="#">Men's lookbook</a></li>
                            <li className={style.nav_item}><a href="#">Women's lookbook</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <div className={style.nav_block_title}>Contact details</div>
                        <ul className={style.nav_list}>
                            <li className={`${style.nav_item} ${style.nav_item_two_lines}`}>
                                <a href="#">Head Office: Avenue Fashion.<br />180-182 Regent Street, London</a>
                            </li>
                            <li className={style.nav_item}><a href="#">Telephone: 0123-456-789</a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.line}></div>
                </div>
                <div className={style.nav}>
                    <div className={style.nav_block}>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Privacy & cookies</a></li>
                            <li className={style.nav_item}><a href="#">Site map</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Award winning</a></li>
                            <li className={style.nav_item}><a href="#">Ethical trading</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">View your lookbook</a></li>
                            <li className={style.nav_item}><a href="#">Track an order</a></li>
                            <li className={style.nav_item}><a href="#">Update information</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}><a href="#">Lookbooks RSS feed</a></li>
                            <li className={style.nav_item}><a href="#">View your lookbook</a></li>
                            <li className={style.nav_item}><a href="#">Delete your lookbook</a></li>
                        </ul>
                    </div>
                    <div className={style.nav_block}>
                        <ul className={style.nav_list}>
                            <li className={style.nav_item}>
                                <a href="#">Email: support@yourwebsite.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={style.bottom}>
                <div className={style.bottom_blocks}>
                    <div className={style.copyright}>© 2016 Avenue Fashion™</div>
                    <div className={style.authors}>Design by RobbyDesigns.com<span className={style.authors_dev}>Dev by Loremipsum.com</span></div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;