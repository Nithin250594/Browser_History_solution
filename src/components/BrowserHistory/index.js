import './index.css'

const BrowserHistory = props => {
  const {time, logo, title, domainUrl, uniqueId, deleteHistoryItem} = props

  const deleteItem = () => {
    deleteHistoryItem(uniqueId)
  }

  return (
    <li className="list-style">
      <div className="each-history-item">
        <div className="time-logo-title-section">
          <p className="time-text-style">{time}</p>
          <img src={logo} alt="domain logo" className="logo-style" />
          <p className="time-text-style">{title}</p>
          <p className="url-style">{domainUrl}</p>
        </div>

        <button
          type="button"
          className="button-style"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
