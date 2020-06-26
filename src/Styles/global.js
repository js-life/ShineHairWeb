import { createGlobalStyle } from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';
// import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap');
    * {
      margin: 0;
      padding:0;
      outline: 0;
      box-sizing:border-box;
    }

    *:focus {
      outline: 0;
    }

    html, body, #root {
      height: 100%;
    }

    body{
      -webkit-font-smoothing: antialiased !important;
    }

    /* #root {
      max-width: 1020px;
      margin: 0 auto;
      padding: 0 20px 50px;
    } */
/*
    border-style, -moz-user-input, button {
      color: #222;
      font-size: 14px;
      font-family: Roboto, sans-serif;
    } */

    border-style, input, button {
      font: 14px 'Roboto', sans-serif;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button{
      cursor: pointer;
    }

`;

/*
  background: #0D2020 url(${background}) no-repeat center top;
*/
