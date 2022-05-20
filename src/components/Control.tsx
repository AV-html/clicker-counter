import React from 'react';
import {ClickerType} from '../App';
import styles from './Control.module.css'
import {Button} from './Button';


type PropsType = {
    changeValue: (clicker: ClickerType) => void
    value: number
}

export function Control(props: PropsType) {

    const onClickIncHandler = () => {
        props.changeValue('inc')
    }
    const onClickResetHandler = () => {
        props.changeValue('reset')
    }

    const isDisabledInc = props.value > 4
    const isDisabledReset = !props.value

    return (
        <div className={styles.control}>
            <Button callback={onClickIncHandler} isDisabled={isDisabledInc} title={'inc'}/>
            <Button callback={onClickResetHandler} isDisabled={isDisabledReset} title={'reset'}/>


            {/*<button onClick={onClickIncHandler} disabled={isDisabledInc}>*/}
            {/*    inc*/}
            {/*</button>*/}

            {/*<button onClick={onClickResetHandler} disabled={isDisabledReset}>*/}
            {/*    reset*/}
            {/*</button>*/}
        </div>
    )
}