import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import "typeface-source-sans-pro"


export const theme = {
    colors: {
        black: "#000"
    }
}

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *, *:before, *:after {  
        box-sizing: border-box;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Source Code Pro', monospace;
    }
`
