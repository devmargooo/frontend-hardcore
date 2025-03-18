'use client';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.css';
import { RootState } from '@/store/store';
import { increment } from '@/store/counter/counter';
import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const countState = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/video')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className={styles.page}>
      <div>
        {countState}
        <button type='button' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div>{JSON.stringify(items)}</div>
    </div>
  );
}
