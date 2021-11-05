import React from 'react'
import styled from '@emotion/styled'
import ConnectButton from '../components/ConnectButton'

const HeaderMain = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #1A1F2D;
  position: relative;
`

const HeaderContent:React.FC = () => {
  return (
    <HeaderMain>
      <ConnectButton />
    </HeaderMain>
  )
}

export default HeaderContent