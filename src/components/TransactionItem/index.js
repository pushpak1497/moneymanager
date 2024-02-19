import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {id, title, amount, type} = details
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list-item">
      <p>{title}</p>

      <p>Rs {amount}</p>

      <p>{type}</p>

      <button type="button" data-testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
