import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    income: 0,
    expense: 0,
    moneyDetails: [],
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onSelectType = event => {
    console.log(event.target.value)
    this.setState({
      type: event.target.value,
    })
  }

  onDelete = id => {
    const {moneyDetails} = this.state
    console.log(moneyDetails)
    const data = moneyDetails.filter(each => each.id === id)
    console.log(data[0].type)
    if (data[0].type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - data[0].amount,
      }))
    } else if (data[0].type === 'EXPENSES') {
      this.setState(prevState => ({
        expense: prevState.expense - data[0].amount,
      }))
    }

    const filteredData = moneyDetails.filter(each => each.id !== id)
    this.setState({
      moneyDetails: filteredData,
    })
  }

  onAddMoneyDetails = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.type === type,
    )
    const {displayText} = typeOption
    const newDetail = {
      id: v4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      moneyDetails: [...prevState.moneyDetails, newDetail],
      title: '',
      amount: '',
      type: 'INCOME',
    }))
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expense: parseInt(prevState.expense) + parseInt(amount),
      }))
    }
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(amount),
      }))
    }
  }

  render() {
    const {title, amount, income, type, expense, moneyDetails} = this.state
    console.log(moneyDetails)
    return (
      <div className="bg-container">
        <div className="heading-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your money manager</p>
        </div>
        <div className="manager-details-container">
          <MoneyDetails incomeR={income} expenseR={expense} />
        </div>
        <div className="form-container">
          <div>
            <h1>Add Transaction</h1>
            <form onSubmit={this.onAddMoneyDetails}>
              <label htmlFor="formHeading">TITLE</label>
              <br />
              <input
                type="text"
                id="formHeading"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="formAmount">AMOUNT</label>
              <br />
              <input
                id="formAmount"
                type="text"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="selectMenu">TYPE</label>
              <select
                className="select-menu"
                id="selectMenu"
                value={type}
                onChange={this.onSelectType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <h1>History</h1>
            <div className="headings-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul className="list-container">
              {moneyDetails.map(each => (
                <TransactionItem
                  details={each}
                  key={each.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
