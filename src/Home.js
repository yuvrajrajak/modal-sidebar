import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <Wrapper>
      <main>
        <button onClick={openSidebar} className='sidebar-toggle'>
          <FaBars />
        </button>
        <button onClick={openModal} className='btn'>
          show modal
        </button>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
main{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar-toggle {
  position: fixed;
  top: 2rem;
  left: 3rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  transition: var(--transition);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
}
.btn {
  text-transform: uppercase;
  background: var(--clr-black);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2)
  border-radius: var(--radius);
  margin: 0.5rem;
}
.btn:hover {
  color: var(--clr-black);
  background: transparent;
}

@keyframes bounce {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


`

export default Home
