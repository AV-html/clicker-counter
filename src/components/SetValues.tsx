import React from 'react';
import {Button} from './Button';

import styles from './SetValues.module.css';

type PropsType = {}

export function SetValues(props: PropsType) {

    const onClickHandler = () => {
        console.log('click Set');
    }

    return (
        <div className={styles.block}>
            <Button title={'Set'}
                    callback={onClickHandler}
                    isDisabled={false}
            />
        </div>

    );
}