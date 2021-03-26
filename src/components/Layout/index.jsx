import React from "react"
import "semantic-ui-css/semantic.min.css"
import styled from "styled-components"

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}
