import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const List = styled.ol`
  margin: none;
  list-style: none;
`;

const ExperienceDegree = ({ title, children }) => (
  <List>
    {children}
  </List>
)

ExperienceDegree.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node
}

export default ExperienceDegree
