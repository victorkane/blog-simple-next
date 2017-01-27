import React from 'react'

import Header from '../components/header'


export default class extends React.Component {
  static getInitialProps () {
    return {
      posts: new Array(15).fill({title: 'This is un post '}).map((v, k) => v.title = v.title + ' ' + (k + 1))
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
              <div className="post" key={clave = clave + 1}><p>{post}</p></div>
          ))}
        </div>
      </div>
    )
  }
}
