import React, { useContext } from 'react'
import { GlobalContext } from '../store/GlobalContext'

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)
    const {deleteTransaction} = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
      <ul className="list">
          {transactions.map(transaction => (
              <li className={transaction.amount < 0? 'minus' : 'plus'} key={transaction.id}>
              {transaction.text} <span>{transaction.amount}</span><button onClick={() => (deleteTransaction(transaction.id))} className="delete-btn">x</button>
            </li>
          ))}
     
      </ul>
    </>
  )
}

export default TransactionList