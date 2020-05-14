import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *, *:before, *:after {  
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
`
