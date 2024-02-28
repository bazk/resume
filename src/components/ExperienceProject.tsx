import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-left: 1rem;
`

export type ExperienceProjectProps = {
  title: string
  children: React.ReactNode
}

export function ExperienceProject({ title, children }: ExperienceProjectProps) {
  return (
    <Wrapper>
      <h5>{title}</h5>

      {children}
    </Wrapper>
  )
}
