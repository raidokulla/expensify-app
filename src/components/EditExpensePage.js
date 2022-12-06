import React from 'react'
import { useParams } from 'react-router-dom';

const EditExpensePage = () => {
    console.log(useParams())
    return (
        <div>This is from my edit expense component</div>
    )
}

export default EditExpensePage