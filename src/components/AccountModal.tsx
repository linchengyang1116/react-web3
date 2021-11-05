import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Modal } from '@douyinfe/semi-ui'
import { useEthers } from '@usedapp/core'
import { background } from '@chakra-ui/react'
import StyledIdenicon from './StyledIdenicon'

const AccountModalMain = styled.div`
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

const AccountModalContent:React.FC<any> = ({ visible, handleOk, handleCancel }) => {

  const { account, deactivate } = useEthers()

  const disConnect = () => {
    deactivate()
  }

  return (
    <AccountModalMain>
      <Modal
        title="Account"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalContent>
          <div className="accountAddressTitle">
            <div>Connected with MetaMask</div>
            <div className="changeButton" onClick={disConnect}>Change</div>
          </div>
          <div className="accountAddress">
            <StyledIdenicon />
            <div className="accountAddressNum">
              {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
            </div>
          </div>
        </ModalContent>
      </Modal>
    </AccountModalMain>
  )
}

export default AccountModalContent