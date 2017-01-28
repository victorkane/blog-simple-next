import React from 'react'
import Link from 'next/link'

import Header from '../components/header'

export default class extends React.Component {
  static getInitialProps () {
    let posts = []
    let n = 0
    const length = 15
    while(posts.length < length) {
      posts.push({
        "id": n++,
        "title": "This is post " + n,
      });
    }
    return {
      posts
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    let clave = 0;
    return(
      <div>
        <Header />
        <div className="posts">
        { this.props.posts.map(post => (
          <div className="post" key={clave = clave + 1}>
            <Link href={'/post/?id=' + clave} as={'/post/' + clave}><a>{post.title}</a></Link>
          </div>
        ))}
        </div>
      </div>
    )
  }
}
