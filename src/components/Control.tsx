import React from 'react';
import styles from './Control.module.css'
import {Button} from './Button';


type PropsType = {
    value: number
    maxValue: number
    changeValue: () => void
    resetValue: () => void
    editMode: boolean
    errorMaxValue: string
    errorMinValue: string
}

export function Control(props: PropsType) {

    const onClickIncHandler = () => {
        props.changeValue()
    }
    const onClickResetHandler = () => {
        props.resetValue()
    }

    const isEditOrError = props.editMode || Boolean(props.errorMaxValue || props.errorMinValue);
    const isDisabledInc = props.value >= props.maxValue || isEditOrError
    const isDisabledReset = !props.value || isEditOrError

    return (
        <div className={styles.control}>
            <Button callback={onClickIncHandler} isDisabled={isDisabledInc} title={'inc'}/>
            <Button callback={onClickResetHandler} isDisabled={isDisabledReset} title={'reset'}/>
        </div>
    )
}