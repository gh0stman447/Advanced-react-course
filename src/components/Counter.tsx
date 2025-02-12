import { useState } from 'react';
import cls from './Counter.module.scss';
import '../index.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((state) => state + 1);
  };

  return (
    <div className={cls.counter}>
      qwdfkwdk
      <button onClick={increment}>{count}</button>
    </div>
  );
};
