import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/theme/GlobalStyles"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
