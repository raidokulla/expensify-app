import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ExpenseDashboardPage />} />
                <Route path="/create" element={<AddExpensePage />} />
                <Route path="/edit">
                    <Route path=":id" element={<EditExpensePage />} />
                </Route>
                <Route path="/help" element={<HelpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default AppRouter