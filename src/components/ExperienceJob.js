import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import DateIntervalSeparator from "./DateIntervalSeparator"

const Secondary = styled.span`
  color: #2e9a82;
`

const ExperienceJob = ({ title, company, fromDate, toDate, children }) => (
  <>
    {title && company && (
      <h3>
        {title} <Secondary>@ {company}</Secondary>
      </h3>
    )}
    {title && !company && <h3>{title}</h3>}
    {!title && company && <h3>{company}</h3>}

    {fromDate && toDate && (
      <p>
        {fromDate}
        <DateIntervalSeparator />
        {toDate}
      </p>
    )}
    {fromDate && !toDate && <p>{fromDate}</p>}
    {!fromDate && toDate && <p>{toDate}</p>}

    {children}
  </>
)

ExperienceJob.propTypes = {
  title: PropTypes.node,
  company: PropTypes.node,
  fromDate: PropTypes.node,
  toDate: PropTypes.node,
  children: PropTypes.node,
}

export default ExperienceJob
