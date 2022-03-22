import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectValue } from 'store/counter/counter';

import style from './Clicker.module.scss'

type ClickerProps = {
    clickerNumber: number,
}

const Clicker = ({clickerNumber}: ClickerProps) => {
    const select = useSelector(selectValue);
    const dispatch = useDispatch();

    const [counter, setCounter] = useState(clickerNumber);

    useEffect(() => {
        setCounter(select);
    }, [select])

    const onClickHandler = (isIncrement: boolean) => {
        isIncrement ? dispatch(increment()) : dispatch(decrement());
    }
    return (
        <div className={style.clicker}>
            <button onClick={() => onClickHandler(true)}>увеличить число</button>
            <button onClick={() => onClickHandler(false)}>уменьшить число</button>
            <span>{counter}</span>
        </div>
    )
}
export default Clicker;