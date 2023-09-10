//auth.js
// action types

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const UPVOTE_ARTICLE = 'UPVOTE_ARTICLE'
export const SET_HAS_UPVOTED = 'SET_HAS_UPVOTED'

// action creators
export const login = (user) => ({ type: LOGIN, user })
export const logout = () => ({ type: LOGOUT })
export const register = (user) => ({ type: REGISTER, user })
export const upvoteArticle = (articleId) => ({
  type: UPVOTE_ARTICLE,
  articleId,
})
export const setHasUpvoted = (articleId) => ({
  type: SET_HAS_UPVOTED,
  articleId,
})
