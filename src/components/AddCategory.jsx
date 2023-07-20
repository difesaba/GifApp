import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
 
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue)
        //setCategories(categories => [inputValue, ...categories])
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func,
    onNewCategory: PropTypes.func,
};
