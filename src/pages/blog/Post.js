import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

export default function Post() {

  const { id, url } = useParams()

  return (
    <div>
      <Helmet>
        <title>Post: {url}</title>
      </Helmet>

      ID: {id} | URL: {url}
    </div>
  )
}
