import React, {useState} from 'react';
import './App.css';
import {Control} from './components/Control';
import {Screen} from './components/Screen';
import {InputValues} from './components/InputValues';
import {SetValues} from './components/SetValues';


// export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [value, setValue] = useState<number>(0);

    const changeValue = () => {
        if (value < 5) {
            setValue(value + 1);
        }
    }
    const resetValue = () => {
        setValue(0);
    }


    return (
        <div className="App">
            <div className="block">
                <div className="screen">
                    <InputValues/>
                </div>
                <div className="control">
                    <SetValues/>
                </div>
            </div>

            <div className="block">
                <div className="screen">
                    <Screen value={value}/>
                </div>

                <div className="control">
                    <Control value={value}
                             changeValue={changeValue}
                             resetValue={resetValue}
                    />
                </div>
            </div>

        </div>
    );
}


export default App;
