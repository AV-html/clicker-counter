import React from 'react';

type PropsType = {
    title: string
    callback: () => void
    isDisabled: boolean
}

export function Button(props: PropsType) {

    return (
        <button onClick={props.callback}
                disabled={props.isDisabled}
        >
            {props.title}
        </button>
    );
}
