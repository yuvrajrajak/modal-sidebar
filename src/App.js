import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Home />
      <Modal />
      <Sidebar />
    </Wrapper>
  )
}

const Wrapper = styled.section`


`

export default App
