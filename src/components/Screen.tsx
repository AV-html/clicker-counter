import React from 'react';
import styles from './Screen.module.css'


type PropsType = {
    value: number
    maxValue: number
    editMode: boolean
    errorMaxValue: string
    errorMinValue: string
}

export function Screen(props: PropsType) {

    const isMaxValue = props.value >= props.maxValue
    let screenClassName = isMaxValue ? styles.red : ''

    let resultScreen: string | number = props.value
    if (props.errorMinValue || props.errorMaxValue) {
        resultScreen = 'Incorrect value'
        screenClassName = styles.red
    } else if (props.editMode) {
        resultScreen = 'Enter values and press set'
    }


    return (
        <div className={styles.screen}>
            <span className={screenClassName}>
                {resultScreen}
            </span>
        </div>
    )
}