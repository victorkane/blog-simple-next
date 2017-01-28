import React from 'react'

import Header from '../components/header'

export default class Post extends React.Component {
  static getInitialProps () {
    let posts = []
    let n = 0
    const length = 15
    while(posts.length < length) {
      posts.push({
        "id": n++,
        "title": "This is post " + n,
        "body": "post body, post body, post body"
      });
    }
    return {
      posts
    }
  }
  render() {
    const post = this.props.posts[this.props.url.query.id - 1]
    return(
      <div>
        <Header />
        <h2>{post['title']}</h2>
        <p>{post['body']}</p>
      </div>
    )
  }
}
