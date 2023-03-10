import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useSearchParams } from 'react-router-dom'
import { url } from '../../utils'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  useEffect(() => {
    searchParams.set('search', search)

    if (!search) {
      searchParams.delete('search')
    }

    setSearchParams(Object.fromEntries([...searchParams]))
    // setSearchParams({name: 'tayfun', category: 3})
  }, [search])

  const posts = [
    {
      id: 1,
      title: 'post 1',
      url: 'post-1',
    },
    {
      id: 2,
      title: 'post 2 adana bilmem ne',
      url: 'post-2-adana-bilmem-ne',
    },
  ]

  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <input type="text" defaultValue={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={url('home.blog.post', {
              id: post.id,
              url: post.url,
            })}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
