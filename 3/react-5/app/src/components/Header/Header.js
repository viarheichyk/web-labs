import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import style from './Header.module.scss';

export default function Header(props) {
    const { firstName, lastName } = props.user;
    
    return(
        <header className={style.header}>
            <section className={style.top_nav}>
                <ul className={style.top_list}>
                    <li className={style.top_list_item}><Link to="profile">{firstName} {lastName}</Link></li>
                    <li className={style.top_list_item}>
                         <div className={style.orders}>
                            <a href="#"><i className="fas fa-shopping-cart"></i> <span className={style.orders_count}>empty</span> <i className="fas fa-chevron-down"></i></a>
                            <ul className={style.orders_list}>

                            </ul>
                        </div>
                    </li>
                    <li className={`${style.top_list_item} ${style.menu_slider}`}><a href="#"><i className="fas fa-bars"></i></a></li>
                 </ul>
            </section>
            <div className={style.wrapper}>
                <section className={style.main}>
                    <h1 className={style.logo}><Link to="/"><b>Avenue</b> fashion</Link></h1>
                    <nav className={style.nav}>
                        <ul className={style.nav__list}>
                            <li className={`${style.nav__list_item} ${style.has_sub_menu}`}>
                                <a href="#">Mens</a>
                                <div className={style.sub_menu}>
                                    <div className={style.sub_menu__blocks}>
                                            <div className={style.sub_menu__block}>
                                            <b>Casuals</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Hoodies & Sweatshirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Polo Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Sportswear</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers & Chinos</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">T-Shirts</a></li>
                                            </ul>
                                        </div>
                                        <div className={style.sub_menu__block}>
                                            <b>Formal</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Suits</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.sub_menu__banner}>
                                        <b>Autumn sale!</b>
                                        <p>Up to 50% off</p>
                                    </div>
                                </div>
                            </li>
                            <li className={`${style.nav__list_item} ${style.has_sub_menu}`}>
                                <a href="#">Womens</a>
                                <div className={style.sub_menu}>
                                    <div className={style.sub_menu__blocks}>
                                            <div className={style.sub_menu__block}>
                                            <b>Casuals</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Hoodies & Sweatshirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Polo Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Sportswear</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers & Chinos</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">T-Shirts</a></li>
                                            </ul>
                                        </div>
                                        <div className={style.sub_menu__block}>
                                            <b>Formal</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Suits</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.sub_menu__banner}>
                                        <b>Autumn sale!</b>
                                        <p>Up to 50% off</p>
                                    </div>
                                </div>
                            </li>
                            <li className={style.nav__list_item}>
                                <a href="#">The brand</a>
                            </li>
                            <li className={`${style.nav__list_item} ${style.has_sub_menu}`}>
                                <a href="#">Local stores</a>
                                <div className={style.sub_menu}>
                                    <div className={style.sub_menu__blocks}>
                                            <div className={style.sub_menu__block}>
                                            <b>Casuals</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Hoodies & Sweatshirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Polo Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Sportswear</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers & Chinos</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">T-Shirts</a></li>
                                            </ul>
                                        </div>
                                        <div className={style.sub_menu__block}>
                                            <b>Formal</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Suits</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.sub_menu__banner}>
                                        <b>Autumn sale!</b>
                                        <p>Up to 50% off</p>
                                    </div>
                                </div>
                            </li>
                            <li className={`${style.nav__list_item} ${style.has_sub_menu}`}>
                                <a href="#">Look book</a>
                                <div className={style.sub_menu}>
                                    <div className={style.sub_menu__blocks}>
                                            <div className={style.sub_menu__block}>
                                            <b>Casuals</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Hoodies & Sweatshirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Polo Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Sportswear</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers & Chinos</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">T-Shirts</a></li>
                                            </ul>
                                        </div>
                                        <div className={style.sub_menu__block}>
                                            <b>Formal</b>
                                            <ul className={style.sub_menu__list}>
                                                <li className={style.sub_menu__list_item}><a href="#">Jackets</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Shirts</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Suits</a></li>
                                                <li className={style.sub_menu__list_item}><a href="#">Trousers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.sub_menu__banner}>
                                        <b>Autumn sale!</b>
                                        <p>Up to 50% off</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    );
}