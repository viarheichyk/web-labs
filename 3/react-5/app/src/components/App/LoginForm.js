import React from 'react';
import style from './LoginForm.module.scss';

export default function LoginForm(props) {
    const { fields, errors, initializeUser, loginFormInputChange } = props;

    return(
        <section className={style.authorize}>
            <form className={style.form} onSubmit={initializeUser}>
                <label className={style.label} for="login">Login</label>
                <input className={style.field} value={fields.login} onChange={ (e) => loginFormInputChange('login', e) } type="text" id="login" name="login" />
                <span className={style.error}>{errors.login}</span>
                <label className={style.label} for="password">Password</label>
                <input className={style.field} value={fields.password} onChange={ (e) => loginFormInputChange('password', e) } type="password" id="password" name="password" />
                <span className={style.error}>{errors.password}</span>
                <input className={style.submit} type="submit" value="Login" />
            </form>
        </section>
    );
}