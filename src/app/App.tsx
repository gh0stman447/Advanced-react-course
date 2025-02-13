import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
