import React from 'react'
// change next/link to next/prefetch
import Link from 'next/prefetch'
import 'isomorphic-fetch'

import Header from '../components/header'

import { apiHost } from '../appconfig.js'

export default class extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch(apiHost + '/api/post')
    const json = await res.json()
    return { posts: json }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div>
        <Header />
        <div className="posts">
        { this.props.posts.map(post => (
          <div className="post" key={post.id + 1}>
            <Link href={'/post/?id=' + (post.id)} as={'/post/' + (post.id)}><a>{post.title}</a></Link>
          </div>
        ))}
        </div>
      </div>
    )
  }
}
