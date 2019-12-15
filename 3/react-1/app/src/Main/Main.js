import React from 'react';
import style from '../Main/Main.module.scss';
import good1Img from '../img/good1.jpg';
import good2Img from '../img/good2.jpg';
import good3Img from '../img/good3.jpg';
import good4Img from '../img/good4.jpg';

function Main(props) {
    const { image, alt } = props.avatar;

    return(
        <main className={style.main}>
            <div className={style.wrapper}>
                <div className={style.goods_filter}>
                    <ul className={style.goods_filter__list}>
                        <li className={style.goods_filter__item}><a href="#">Womens</a></li>
                        <li className={style.goods_filter__item}><a href="#">Mens</a></li>
                        <li className={style.goods_filter__item}><a href="#">Kids</a></li>
                        <li className={style.goods_filter__item}><a href="#">All</a></li>
                    </ul>
                </div>
                <section className={style.goods_list}>
                    <article className={style.goods_list__item}>
                        <img src={image} alt={alt} title={alt} />
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>{alt}</div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good1Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>34.79</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Womens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good2Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>47.50</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Womens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good3Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>89.99</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Mens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good3Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>89.99</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Mens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good3Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>89.99</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Mens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good1Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>34.79</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Womens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good4Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>29.95</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Womens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                    <article className={style.goods_list__item}>
                        <img src={good4Img} alt="good" title="good" />
                        <div className={style.goods_list__item_price}>47.50</div>
                        <div className={style.goods_list__order}>
                            <div className={style.goods_list__item_title}>Womens burnt orange casual tee <sup>£</sup>29.95</div>
                            <div className={style.goods_list__item_description}>Classic casual t-shirt for women on the move.<br />100% cotton.</div>
                            <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                            <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                            <div className={style.clear}></div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
}

export default Main;