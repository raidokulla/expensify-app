import { legacy_createStore as createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expences'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )
  return store
}
