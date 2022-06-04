import React, {ChangeEvent} from 'react';
import styles from './InputNumber.module.css';

type PropsType = {
    title: string
    value: number
    placeholder: string
    changeValue: (value: number) => void
    error: string
}

export function InputNumber(props: PropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(e.currentTarget.value))
    }


    return (
        <label className={styles.label}>
            <span className={styles.title}>{props.title}</span>
            <input type="number"
                   placeholder={props.placeholder}
                   className={props.error ? `${styles.invalid} ${styles.number}` : styles.number}
                   value={props.value}
                   onChange={onChangeHandler}
            />
        </label>
    );
}