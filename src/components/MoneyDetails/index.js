import './index.css'

const MoneyDetails = props => {
  const {incomeR, expenseR} = props
  const balance = incomeR - expenseR
  console.log(balance)
  return (
    <div className="money-details-container">
      <div className="details-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="details-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeR}</p>
        </div>
      </div>
      <div className="details-container expense">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenseR}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
