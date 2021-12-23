import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((result, transaction) => (result += transaction.amount), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}

export default Balance
