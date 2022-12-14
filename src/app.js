import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 35, createdAt: 1 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 150, createdAt: 2 }))

store.dispatch(setTextFilter('bill'))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))
