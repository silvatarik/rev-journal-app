import { useState } from 'react/cjs/react.development'

export const useForm = (initialState = {}) => {

    const [state, setstate] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setstate(initialState);
    }

    const handleState = ({ target }) => {
        setstate({
            ...state, [target.name]: target.value
        });
    }

    return [state, handleState,reset];
}
