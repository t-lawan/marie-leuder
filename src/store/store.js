import { createStore } from "redux"
import * as actionTypes from "./action"
const initialState = {
  pages: [],
  navbarLinks: [],
  videos: [],
  isLoaded: false,
  currentVideo: null,
  show_modal: false,
  modal_component: null,
  modal_title: ''
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
    case actionTypes.SET_VIDEOS:
      return Object.assign({}, state, {
        videos: action.videos,
      })
    case actionTypes.SET_CURRENT_VIDEO:
      return Object.assign({}, state, {
        currentVideo: action.currentVideo,
      })
    case actionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        show_modal: true,
        modal_component: action.component,
        modal_title: action.title
      })
    case actionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        show_modal: false,
        modal_component: null,
        modal_title: ''
      })
    default:
      return state
  }
}
export const store = () =>
  createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
