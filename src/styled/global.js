import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:none;
}

html,body, #root{
    min-height:100vh;
}

body{
    background: #0D2636;
    font-size:14px;
}

body, input,button{
    font-size:14px;
    color:#222;
    font-family:Arial, Helvetica,sans-serif;
}

button{
    cursor:pointer;
}

`