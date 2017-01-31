import fetch from 'isomorphic-fetch'

// request most recent posts
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// request a single post by postid
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

import {apiHost} from '../appconfig.js'

// request a most recent posts

export const requestPosts = () => ({
    type: REQUEST_POSTS
})

export const receivePosts = json => ({
    type: RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
})

export const fetchPosts = () => dispatch => {
    console.log("ACTION fetchPosts")
    dispatch(requestPosts())
    return fetch(apiHost + '/api/post/')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
}

// request a single post by postid

export const requestPost = (postid) => ({
    type: REQUEST_POST,
    postid: postid
})

export const receivePost = (postid, json) => ({
    type: RECEIVE_POST,
    post: json,
    receivedAt: Date.now()
})

export const fetchPost = (postid) => dispatch => {
    console.log("ACTION fetchPosts")
    dispatch(requestPost(postid))
    return fetch(apiHost + '/api/post/' + postid)
      .then(response => response.json())
      .then(json => dispatch(receivePost(postid, json)))
}
