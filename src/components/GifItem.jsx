
export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
    <img src={ url } alt={ title } />
    <p><a href={ url } target="_blank">{ title }</a></p>
    </div>
  )
}
