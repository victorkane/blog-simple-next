import React from 'react'

import Header from '../components/header'

export default class Post extends React.Component {
  static getInitialProps () {
    return {
      posts: new Array(15).fill({title: 'This is un post '}).map((v, k) => v.title = v.title + ' ' + (k + 1))
    }
  }
  render() {
    return(
      <div>
        <Header />
        <h2>Post</h2>
        <div>{this.props.posts[this.props.url.query.id - 1]}</div>
      </div>
    )
  }
}
