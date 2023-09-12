//reducer.js
import { LOGIN, LOGOUT, UPVOTE_ARTICLE } from './auth.js'

const initialState = {
  user: null,
  upvotedArticles: [],
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user }
    case LOGOUT:
      return { ...state, user: null }
    case UPVOTE_ARTICLE:
      // Ensure the user is logged in before processing the upvote
      if (!state.user) {
        return state // Return the current state if the user is not logged in
      }
      // Check if the articleId is not already in the upvotedArticles array
      if (!state.upvotedArticles.includes(action.articleId)) {
        return {
          ...state,
          upvotedArticles: [...state.upvotedArticles, action.articleId],
        }
      }
      return state

    default:
      return state
  }
}

export default authReducer
