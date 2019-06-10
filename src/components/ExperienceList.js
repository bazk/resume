import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const List = styled.ol`
  margin: 0;
  list-style: none;
`;

const ExperienceList = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <List>
      {children}
    </List>
  </div>
)

ExperienceList.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node
}

export default ExperienceList
