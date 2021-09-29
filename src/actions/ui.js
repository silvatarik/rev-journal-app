import { types } from "../types/types"


export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const RemoveError = () => ({
    type: types.uiRemoveError,
    payload: null
});

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
}