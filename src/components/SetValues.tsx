import React from 'react';
import {Button} from './Button';

import styles from './SetValues.module.css';

type PropsType = {
    offEditMode: () => void
    editMode: boolean
    maxValue: number
    minValue: number
    // error: string
}

export function SetValues(props: PropsType) {

    const onClickHandler = () => {
        props.offEditMode()
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('minValue', JSON.stringify(props.minValue))
    }

    return (
        <div className={styles.block}>
            <Button title={'Set'}
                    callback={onClickHandler}
                    isDisabled={!props.editMode}

            />
        </div>

    );
}