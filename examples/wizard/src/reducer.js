import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'caicloud-redux-form'

const reducer = combineReducers({
  form: reduxFormReducer
})

export default reducer
