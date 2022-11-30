import './index.css'

const HistoryItem = props => {
  const {listItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItem

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <div className="list-sub-con">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="domain-logo-title">
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <div className="title-and-url">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>

      <div className="delete-con">
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
