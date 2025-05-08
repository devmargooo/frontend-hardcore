'use client';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.css';
import { incrementAsync, selectCount } from '@/store/counter/counter';
import { useEffect, useState } from 'react';
import { AppDispatch } from '@/store/types';

export default function Home() {
  const [items, setItems] = useState([]);
  const count = useSelector(selectCount);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/video')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className={styles.page}>
      <div>
        {count}
        <button type='button' onClick={() => dispatch(incrementAsync())}>
          +
        </button>
      </div>
      <div>{JSON.stringify(items)}</div>
    </div>
  );
}
