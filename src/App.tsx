import React from 'react'
import './App.css'
import { Layout } from '@douyinfe/semi-ui'
import HeaderContent from './Layout/Header'



function App() {
  const { Header, Footer, Sider, Content } = Layout

  return (
    <Layout className="components-layout-demo">
      <Header>
        <HeaderContent />
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
