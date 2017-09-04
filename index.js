export const reducer = (combineReducers, options) => {
    const resetType = options.type || 'RESET_STORE'

    const appReducer = combineReducers

    const rootReducer = (state, action) => {
        if (action.type === resetType) {
            state = undefined
        }

        return appReducer(state, action)
    }

    return rootReducer
}