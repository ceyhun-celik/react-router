import { useParams } from "react-router-dom"

export default function Post() {

  const { id, url } = useParams()

  return (
    <div>ID: {id} | URL: {url}</div>
  )
}
