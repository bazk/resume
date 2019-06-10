/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import bg from '../images/bg.jpg';

const Content = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 960px;
  min-height: 120vh;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.6);

  @media print {
    margin: 0;
    max-width: initial;
    padding: 0;
    box-shadow: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${props => props.bg});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }

  @page {
    size: A4
  }

  @media print {
    html {
      font-size: 14px;
    }

    body {
      background: none;
    }

    p, li {
      page-break-after: auto;
      page-break-inside: avoid;
    }

    h1, h2, h3, h4, h5, h6 {
      page-break-after:avoid;
      page-break-inside: avoid;
    }
  }
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle bg={bg} />
    <Content>
      {children}
    </Content>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
