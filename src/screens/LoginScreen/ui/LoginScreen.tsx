import { useNavigate } from 'react-router-dom';
import cl from './_LoginScreen.module.scss'
import { useState, type FormEvent } from 'react';
import { PRIVATE_PAGES } from '@/config/router/routes';
import Input from '@/UI/Input/Input';
import { useAuth } from '@/context/auth/useAuth';

export const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === 'admin' && password === '12345') {
            login('fake-jwt-token');
            navigate(PRIVATE_PAGES.HOME.path, { replace: true });
        } else {
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div className={cl.LoginScreen}>
            <form onSubmit={handleLogin} className={cl.form}>
                <h2>Авторизация</h2>

                <Input.Text
                    type='type'
                    placeholder='Логин'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <Input.Text
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    className={cl.submitButton}
                    type="submit">
                    Войти
                </button>
            </form>
        </div>
    )
}
