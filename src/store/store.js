import { createStore } from "redux"
import * as actionTypes from "./action"
const initialState = {
  pages: [],
  navbarLinks: [],
  isLoaded: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      })
    case actionTypes.SET_NAVBAR_LINKS:
      return Object.assign({}, state, {
        navbarLinks: action.navbarLinks,
      })
    case actionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true,
      })
    default:
      return state
  }
}
export const store = () =>
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
