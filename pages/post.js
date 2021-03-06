import React from 'react'
import 'isomorphic-fetch'

import Header from '../components/header'

import { apiHost } from '../appconfig.js'

export default class Post extends React.Component {
  static async getInitialProps ({pathname, query}) {
    // eslint-disable-next-line no-undef
    //console.log(query.id)
    const res = await fetch(apiHost + '/api/post/' + query.id)
    const json = await res.json()
    return { post: json }
  }
  render() {
    const post = this.props.post
    return(
      <div>
        <Header />
        <h2>{post['title']}</h2>
        <p>{post['body']}</p>
      </div>
    )
  }
}
