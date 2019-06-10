import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const List = styled.ol`
  margin: none;
  list-style: none;
`;

const ExperienceDegreeActivity = ({ title, children }) => (
  <List>
    {children}
  </List>
)

ExperienceDegreeActivity.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node
}

export default ExperienceDegreeActivity
