import { createGlobalStyle } from "styled-components"
import SwissNormal from "./components/assets/fonts/Swiss_721_W01_Roman.woff"
import SwissBold from "./components/assets/fonts/Swiss_721_Bold.woff"
import SwissItalic from "./components/assets/fonts/Swiss_721_Italic.woff"
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Swiss;
    src: url(${SwissNormal}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Swiss;
    src: url(${SwissBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Swiss;
    src: url(${SwissItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }
    * {
box-sizing: border-box;
}
.fade_in{
  animation-name: fadeIn;
  animation-duration: 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
html,
body {
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 0;
  font-style: normal; 
  font-family: 'Swiss', Fallback, sans-serif;
  background: black; 
  }
  h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    font-weight: 100;
    color: inherit;
    }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
  margin-bottom: 1.45rem;
  font-size: 2.5rem;
  line-height: 1.1;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p, li{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1em;
  line-height: 1.3;
}
li {
  list-style-type: lower-roman;
}

.slide-in {
  transform: translateY(0%) !important;
}

.slide-out {
  transform: translateY(-100%) !important;
}

@keyframes slidein {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
}

@keyframes slideout {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

`
export const levels = {
  background: 0,
  jumbotron: 50,
  navbar: 400,
  navbarText: 500,
  modal: 1000,
  modalText: 1010,
}
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}
