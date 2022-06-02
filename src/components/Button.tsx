import React from 'react';
import styles from './Button.module.css';

type PropsType = {
    title: string
    callback: () => void
    isDisabled: boolean
}

export function Button(props: PropsType) {

    return (
        <button onClick={props.callback}
                disabled={props.isDisabled}
                className={styles.button}
        >
            {props.title}
        </button>
    );
}
