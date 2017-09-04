# redux-store-reset

```js
// your reducers file
import { combineReducers } from 'redux'
import { reducer as storeResetReducer } from 'redux-store-reset'
...

const rootReducer = storeResetReducer(combineReducers({ ... }))
export default rootReducer
```
You can dispatch action with type == 'RESET_STORE', and store will be reseted

## Customization
```js
const options = {
    type: 'MY_OWN_RESET_TYPE'
}
const rootReducer = storeResetReducer(combineReducers({ ... }), options)
```
Now you can use action with type == 'MY_OWN_RESET_TYPE' to reset store