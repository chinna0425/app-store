import './index.css'

const TabItem = props => {
  const {elements, isActive, tabchanger} = props
  const styles = isActive ? 'button1' : 'button'
  const {tabId, displayText} = elements
  const changeitems = () => {
    tabchanger(tabId)
  }
  return (
    <li>
      <button type="button" className={styles} onClick={changeitems}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
