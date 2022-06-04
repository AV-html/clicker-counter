import React, {useEffect, useState} from 'react';
import './App.css';
import {Control} from './components/Control';
import {Screen} from './components/Screen';
import {InputValues} from './components/InputValues';
import {SetValues} from './components/SetValues';


// export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [value, setValue] = useState<number>(0);

    const changeValue = () => {
        if (value < maxValue) {
            setValue(value + 1);
        }
    }
    const resetValue = () => {
        setValue(minValue);
    }

    const [editMode, setEditMode] = useState<boolean>(false)
    const [maxValue, setMaxValue] = useState<number>(5);
    const [minValue, setMinValue] = useState<number>(0);
    const [errorMaxValue, setErrorMaxValue] = useState<string>('');
    const [errorMinValue, setErrorMinValue] = useState<string>('');

    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
        editMode || onEditMode()
    }
    const changeMinValue = (newMinValue: number) => {
        setMinValue(newMinValue)
        editMode || onEditMode()
    }
    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
        setValue(minValue)
    }

    useEffect(() => {
        const minValue = localStorage.getItem('minValue');
        const maxValue = localStorage.getItem('maxValue');
        if (minValue && maxValue) {
            setMinValue(Number(minValue))
            setMaxValue(Number(maxValue))
            setValue(Number(minValue))
        }
    }, [])

    useEffect(() => {
        if (maxValue <= minValue) {
            setErrorMaxValue('Incorrect Value')
            setErrorMinValue('Incorrect Value')
            offEditMode()
        } else if (minValue < 0) {
            setErrorMinValue('Incorrect Value')
            offEditMode()
        } else {
            setErrorMaxValue('')
            setErrorMinValue('')
        }
    }, [maxValue, minValue])


    return (
        <div className="App">
            <div className="block">
                <div className="screen">
                    <InputValues changeMaxValue={changeMaxValue}
                                 changeMinValue={changeMinValue}
                                 maxValue={maxValue}
                                 minValue={minValue}
                                 errorMaxValue={errorMaxValue}
                                 errorMinValue={errorMinValue}
                    />
                </div>
                <div className="control">
                    <SetValues offEditMode={offEditMode}
                               editMode={editMode}
                               maxValue={maxValue}
                               minValue={minValue}
                    />
                </div>
            </div>

            <div className="block">
                <div className="screen">
                    <Screen value={value}
                            maxValue={maxValue}
                            editMode={editMode}
                            errorMaxValue={errorMaxValue}
                            errorMinValue={errorMinValue}
                    />
                </div>

                <div className="control">
                    <Control value={value}
                             maxValue={maxValue}
                             changeValue={changeValue}
                             resetValue={resetValue}
                             editMode={editMode}
                             errorMaxValue={errorMaxValue}
                             errorMinValue={errorMinValue}
                    />
                </div>
            </div>
        </div>
    );
}


export default App;
