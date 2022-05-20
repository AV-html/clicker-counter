import React from 'react';
import styles from './Screen.module.css'


type PropsType = {
    value: number
}

export function Screen(props: PropsType) {

    const isMaxValue = props.value > 4

    return (
        <div className={styles.screen}>
            <span className={isMaxValue ? styles.max : ''}>
                {props.value}
            </span>
        </div>
    )
}