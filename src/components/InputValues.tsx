import React from 'react';
import {InputNumber} from './InputNumber';
import styles from './InputValues.module.css';

type PropsType = {
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    maxValue: number
    minValue: number
    errorMinValue: string
    errorMaxValue: string
}

export function InputValues(props: PropsType) {

    return (
        <div>
            <div className={styles.max}>
                <InputNumber title={'Max value:'}
                             placeholder={'max'}
                             value={props.maxValue}
                             changeValue={props.changeMaxValue}
                             error={props.errorMaxValue}
                />
            </div>
            <div className={styles.min}>
                <InputNumber title={'Start value:'}
                             placeholder={'min'}
                             value={props.minValue}
                             changeValue={props.changeMinValue}
                             error={props.errorMinValue}
                />
            </div>
        </div>
    );
}