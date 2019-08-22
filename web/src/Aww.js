import React from 'react'
import styled from 'styled-components'

const Awwz = styled.div`
   {
    background: white;
    text-align: center;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-flow: column;
    justify-content: center;
  }
`

const Sectionz = styled.div`
   {
    padding: 0px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: ${props => props.align};
  }
`

const Hrz = styled.hr`
   {
    width: 90%;
    border-width: 0.5px;
  }
`
const Footerz = styled.small`
  color: grey;

  span {
    color: coral;
  }
`

const Aww = () => (
  <Awwz>
    <Sectionz align="flex-end">
      <div>Something wrong! Sorry!</div>
      <div>/</div>
      <div>
        <img alt="kat" src="/img/kat.png" width="32px" height="auto" />
        <img alt="duck" src="/img/duck.png" width="16px" height="auto" />
      </div>
    </Sectionz>
    <Hrz />
    <Sectionz align="flex-start">
      <Footerz>
        made w/ <span>❤</span> foxfox.io
      </Footerz>
    </Sectionz>
  </Awwz>
)

export default Aww
