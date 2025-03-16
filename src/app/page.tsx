'use client';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.css';
import { RootState } from '@/store/store';
import { increment } from '@/store/counter/counter';

export default function Home() {
  const countState = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.page}>
      <div>
        {countState}
        <button type='button' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}
