/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import bg from '../images/bg.jpg';

const Background = styled.div`
  margin: 0;
  padding: 0;
  background: red;
  display: flex;
  flex-direction: row;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 960px;
  min-height: 120vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  background: white;
  flex-grow: 1;
  flex-shrink: 1;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.6);
`;

const Layout = ({ children }) => (
  <Background
    image={bg}
  >
    <Content>
      {children}
    </Content>
  </Background>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
