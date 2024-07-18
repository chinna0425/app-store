import './index.css'

const AppItem = props => {
  const {setelement} = props
  const {appId, appName, imageUrl, category} = setelement
  return (
    <li className="list-items">
      <img src={imageUrl} className="imagestyle" alt={appName} />
      <p className="appnames">{appName}</p>
    </li>
  )
}
export default AppItem
