'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var reducer = exports.reducer = function reducer(combineReducers, options) {
    options = options || {};

    var resetType = options.type || 'RESET_STORE';

    var appReducer = combineReducers;

    var rootReducer = function rootReducer(state, action) {
        if (action.type === resetType) {
            state = undefined;
        }

        return appReducer(state, action);
    };

    return rootReducer;
};