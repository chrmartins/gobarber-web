﻿import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  border-style, input button {
    font-family: 'Roboto Slab', serif;
    font-size: 500;
  }

  button {
    cursor: pointer;
  }
`