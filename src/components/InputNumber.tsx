import React from 'react';
import styles from './InputNumber.module.css';

type PropsType = {
    title: string
    max: number
    min: number
    placeholder: string
}

export function InputNumber(props: PropsType) {
    return (
        <label className={styles.label}>
            <span className={styles.title}>{props.title}</span>
            <input type="number"
                   max={props.max}
                   min={props.min}
                   placeholder={props.placeholder}
                   className={styles.number}
            />
        </label>
    );
}