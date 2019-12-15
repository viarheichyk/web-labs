import React from 'react';
import style from './Card.module.scss';

export default function Card(props) {
    const { removeCardClick } = props;
    const { description, price, imgPath, id, name } = props.data;

    return(
        <article className={style.goods_list__item}>
            <img src={imgPath} alt="good" title="good" />
            <div className={style.goods_list__item_price}>{price}</div>
            <span className={style.goods_list__item_remove} onClick={ () => removeCardClick(id) }>❌</span>
            <div className={style.goods_list__order}>
                <div className={style.goods_list__item_title}>{name} <sup>£</sup>{props.data.price}</div>
                <div className={style.goods_list__item_description}>{description}</div>
                <input className={style.goods_list__item_count} type="number" min="1" value="1" />
                <button className={style.goods_list__item_button}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                <div className={style.clear}></div>
            </div>
        </article>
    );
}