import React from 'react'

import Header from '../components/header'

export default class Post extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <h2>{this.props.post}</h2>
      </div>
    )
  }
}
