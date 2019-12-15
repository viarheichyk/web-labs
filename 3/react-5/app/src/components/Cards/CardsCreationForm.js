import React from 'react';
import style from './CardsCreationForm.module.scss';

export default function CardsCreationForm(props) {
    const { addCardSubmit, inputChange, fields, errors } = props;

    return(
        <form className={style.form} onSubmit={addCardSubmit}>
            <label className={style.label} for="name">Name</label>
            <input className={style.field} value={fields.name} onChange={ (e)=> inputChange('name', e) } type="text" name="name" id="name" />
            <span className={style.error}>{errors.name}</span>
            <label className={style.label} for="description">Description</label>
            <input className={style.field} value={fields.description} onChange={ (e)=> inputChange('description', e) } type="text" name="description" id="description" />
            <span className={style.error}>{errors.description}</span>
            <label className={style.label} for="name">Image url</label>
            <input className={style.field} value={fields.imgPath} onChange={ (e)=> inputChange('imgPath', e) } type="text" name="imgPath" id="imagPath" />
            <span className={style.error}>{errors.imgPath}</span>
            <label className={style.label} for="category">Category</label>
            <input className={style.field} value={fields.category} onChange={ (e)=> inputChange('category', e) } type="text" name="category" id="category" />
            <span className={style.error}>{errors.category}</span>
            <label className={style.label} for="price">Price</label>
            <input className={style.field} value={fields.price} onChange={ (e)=> inputChange('price', e) } type="number" step="0.01" name="price" />
            <span className={style.error}>{errors.price}</span>
            <input className={style.submit} type="submit" value="Add card" />
        </form>
    );
}