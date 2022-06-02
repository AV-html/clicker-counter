import React from 'react';
import {InputNumber} from './InputNumber';
import styles from './InputValues.module.css';

type PropsType = {}

export function InputValues(props: PropsType) {
    return (
        <div>
            <div className={styles.max}>
                <InputNumber title={'Max value:'}
                             max={5}
                             min={0}
                             placeholder={'5'}
                />
            </div>
            <div className={styles.min}>
                <InputNumber title={'Start value:'}
                             max={5}
                             min={0}
                             placeholder={'0'}
                />
            </div>
        </div>
    );
}