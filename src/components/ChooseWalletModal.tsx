import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Modal } from '@douyinfe/semi-ui'
import { useEthers } from '@usedapp/core'
import { background } from '@chakra-ui/react'
import StyledIdenicon from './StyledIdenicon'

const WalletModalMain = styled.div`
`

const ModalContent = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  
  .accountAddressTitle {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    
    .changeButton {
      padding: 1px 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  
  .accountAddress {
    display: flex;
    font-size: 18px;
    font-weight: bolder;
    
    .accountAddressNum {
      margin-left: 10px;
    }
  }
`

const WalletModalContent:React.FC<any> = ({ walletVisible, handleOk, handleCancel }) => {

  const { account, deactivate } = useEthers()

  const disConnect = () => {
    deactivate()
  }

  return (
    <WalletModalMain>
      <Modal
        title="Account"
        visible={walletVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        1
      </Modal>
    </WalletModalMain>
  )
}

export default WalletModalContent