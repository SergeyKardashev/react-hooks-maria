import React from 'react';
import { memo, useMemo, useCallback, useState } from 'react';
import RenderCounter from './render-counter/RenderCounter';
import './TaskTwo.css';

export default function TaskTwo() {
    const update = useUpdate()
    return (
        <div className="TaskTwo">
            <button onClick={update}>Обновить компонент</button>
            <RenderCounter />
            <Root />
        </div>
    )
}

const Root = memo(() => {
    const [value, setValue] = useState('')
    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    }, []); // Мемоизируем функцию handleChange

    const memoizedValue = useMemo(() => {
        return (
            <form className="form-container">
                Введенное значение: {value}
                <RenderCounter />
                <Input onChange={handleChange} />
            </form>
        );
    }, [value, handleChange]);
    return memoizedValue;
});

const Input = memo(({ onChange }) => {
    return (
        <div className="input-container">
            <input type="text" className="input-field" name="value" onChange={onChange} />
            <RenderCounter />
        </div>
    );
});

function useUpdate() {
    const [, setCount] = useState(0)
    return useCallback(() => { setCount(counter => counter + 1) }, []);
};