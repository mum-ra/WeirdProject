import { useState } from 'react'

import './App.css'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState("")
  const [transactions, setTransactions] = useState([])

  const handleDescription = (value)=>{
    setDescription(value);
  }
  const handleAmount = (value)=>{
    setAmount(value);
  }
  const handeSubmit= (e)=>{
    if(!amount || !description) return
    e.preventDefault()
    const aux = transactions;
    aux.push({amount, description})
    setTransactions(aux);
          // post('/', {
          //   amount,
          //   description
          // });

    setAmount(0)
    setDescription("")
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <form onSubmit={(e)=>handeSubmit(e)}>
          <span>Transaction Amount</span>
          <input onChange={handleAmount}></input>
          <br></br>
          <span>Transaction Description</span>
          <input onChange={handleDescription}></input>
          <br/>
          <button type="submit">Send transaction</button>
      </form>
      {transactions.length > 0 && <table>
        <tr>
          <td>Amount </td>
          <td>Description </td>
        </tr>
      {
        transactions.map((transaction, index) => {
          const {amount,  description} = transaction
          return (
          <tr key={index}>
            <td>{amount}</td>
            <td>{description}</td>
          </tr>
          )
        })
      }
      </table>}
    </div>
  );
}

export default App
