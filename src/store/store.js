import { createStore } from "redux"
import * as actionTypes from "./action"
const initialState = {
  pages: [],
  navbarLinks: [],
  mobileNavbarLinks: [],
  videos: [],
  isLoaded: false,
  currentVideo: null,
  show_modal: false,
  modal_component: null,
  modal_title: '',
  modal_position_left: true,
  modal_number_of_columns: 1,
  experience_transition: {
    animationIn: "slideInRight",
    animationOut: "slideOutLeft",
    isVisible: true,
    isTransitioning: false,
  },
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
        modal_title: action.title,
        modal_position_left: action.left,
        modal_number_of_columns: action.noOfColumns
      })
    case actionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        show_modal: false,
        modal_component: null,
        modal_title: ''
      })
    case actionTypes.SET_MOBILE_NAVBAR_LINKS: 
      return Object.assign({}, state, {
        mobileNavbarLinks: action.mobileNavbarLinks
      })
      case actionTypes.SLIDE_RIGHT_TRANSITION:
      return Object.assign({}, state, {
        experience_transition: {
          animationIn: "slideInRight",
          animationOut: "slideOutLeft",
          isVisible: false,
          isTransitioning: true,
        },
      })
    case actionTypes.SLIDE_LEFT_TRANSITION:
      return Object.assign({}, state, {
        experience_transition: {
          animationIn: "slideInLeft",
          animationOut: "slideOutRight",
          isVisible: false,
          isTransitioning: true,
        },
      })
    case actionTypes.SET_IS_VISIBLE_TO_TRUE:
      return Object.assign({}, state, {
        experience_transition: {
          ...state.experience_transition,
          isVisible: true,
        },
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
