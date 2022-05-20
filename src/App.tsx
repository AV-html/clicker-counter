import React, {useState} from 'react';
import './App.css';

import {Screen} from './components/Screen';
import {Control} from './components/Control';


// export type ValueType = 0 | 1 | 2 | 3 | 4 | 5
export type ClickerType = 'inc' | 'reset';

function App() {
    const [value, setValue] = useState<number>(0);

    const changeValue = (clicker: ClickerType) => {
        if (clicker === 'inc') {
            setValue(value + 1);
        }
        if (clicker === 'reset') {
            setValue(0);
        }
    }

    return (
        <div className="App">

            <div className="clicker">
                <Screen value={value}/>

                <Control value={value} changeValue={changeValue}/>
            </div>

        </div>
    );
}


export default App;
