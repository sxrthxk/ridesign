import React from 'react'
import styled, {keyframes} from 'styled-components'

const Loader = () => {
    return(
    <StyledPageLoaderDiv>
    <svg
    class="page-loader-animation"
      width="290"
      height="337"
      viewBox="0 0 290 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 337V0L290 167L161 242.5L176.717 268H142L95 186L132.5 161L79 129.5L78.5 262L109.5 242.5L125 267.5L50.5 312.136V82L186 161L132.5 195.5L147.5 220L237 167.5L28 47V320.5L0 337Z"
        fill="#FFFAFA"
      />
    </svg>
  </StyledPageLoaderDiv>)
  }

  const StyledPageLoaderDiv = styled.div`
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
  `;