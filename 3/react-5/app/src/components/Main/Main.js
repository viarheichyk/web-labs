import React from 'react';
import CardsContainer from '../Cards/CardsContainer';
import style from '../Main/Main.module.scss';

function Main() {
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
                <CardsContainer />
            </div>
        </main>
    );
}

export default Main;