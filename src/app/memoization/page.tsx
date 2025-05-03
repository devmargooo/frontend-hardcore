'use client';
import { useMemo, useEffect, useState } from 'react';
import styles from './page.module.css';
import React from 'react';

type ChildProps = {
    data: { a: string};
}

export default function Page() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => setCounter((prev) => prev + 1), 1000);
        return () => clearInterval(intervalId);
    }, [])

    const data = useMemo(() => ({ a: "foo"}), []);

    return (
        <div className={styles.wrapper}>
            {counter}
            <Child data={data}/>
        </div>
    )
}

const Child = React.memo(({data}: ChildProps) => {
    console.log("render ");
    return (
        <div className={styles.child}>{data.a}</div>
    )
})

Child.displayName = 'Child';
