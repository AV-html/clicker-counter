import React from 'react';
import styles from './Control.module.css'
import {Button} from './Button';


type PropsType = {
    value: number
    changeValue: () => void
    resetValue: () => void
}

export function Control(props: PropsType) {

    const onClickIncHandler = () => {
        props.changeValue()
    }
    const onClickResetHandler = () => {
        props.resetValue()
    }

    const isDisabledInc = props.value > 4
    const isDisabledReset = !props.value

    return (
        <div className={styles.control}>
            <Button callback={onClickIncHandler} isDisabled={isDisabledInc} title={'inc'}/>
            <Button callback={onClickResetHandler} isDisabled={isDisabledReset} title={'reset'}/>
        </div>
    )
}