/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import GlobalStyle from '../globalStyles';
import Navbar from "./Navbar/Navbar"
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/600.css";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
          <GlobalStyle />
      <div
        style={{
          margin: `0 auto`,
        }}
      >      <Navbar/>

        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
