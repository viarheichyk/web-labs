import React from 'react';
import style from './Profile.module.scss';

export default function Profile() {
    return(
        <div className={style.profile}>
            <img className={style.avatar} src="https://pp.userapi.com/c824502/v824502758/123bc4/6fGIAS8zGjw.jpg" alt="avatar" title="avatar"/>
            <p className={style.aboutMe}>
                My name is Aleksandr. Last year I graduated from the Gomel State Technical University named after PavelSukhoi.
            </p>
            <p className={style.aboutMe}>
                My major is Engineering. I specialized in information technology.
            </p>
        </div>
    );
}