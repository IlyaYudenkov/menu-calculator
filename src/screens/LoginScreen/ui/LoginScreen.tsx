import { useNavigate } from 'react-router-dom';
import cl from './_LoginScreen.module.scss'
import { useState } from 'react';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '12345') {
            localStorage.setItem('token', 'fake-jwt-token');
            navigate('/home');
        } else {
            alert('Неверный логин или пароль');
        }
    };
    return (
        <div className={cl.AuthScreen}>
            <form onSubmit={handleLogin} className={cl.form}>
                <h2>Авторизация</h2>

                <input
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Войти</button>
            </form>
        </div>
    )
}
