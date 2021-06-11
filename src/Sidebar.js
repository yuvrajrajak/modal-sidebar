import React from 'react'
import logo from './logo.svg'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import styled from 'styled-components'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='coding addict' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {
            links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {icon}
                    {text}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <ul className='social-icons'>
          {
            social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </aside>
    </Wrapper>
  )
}


const Wrapper = styled.section`
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  paddding: 1rem 1.5rem;
}
.close-btn{
  font-size: 1.75rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  transition: var(--transition);
  cursor: pointer;
  color: var(--clr-red-dark);
  margin-top: 0.2rem;
}
.close-btn:hover {
  color: var(--clr-red-light);
}
.logo {
  justify-self: center;
  height: 40px;
}
.links a{
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--clr-grey-3);
  transition: var(--transition);
  letter-spacing: var(--spacing);
}
.links a:hover{
background: var(--clr-grey-10);
color: var(--clr-grey-2);
}
.links a svg {
  font-size: 1.5rem;
  color: var(--clr-grey-5);
  margin-right: 1rem;
  transition: var(--transition);
}
.links a:hover svg {
  color: var(--clr-grey-4);
}
.social-icons {
  justify-self: center;
  display: flex;
  padding-bottom: 2rem;
}
.social-icons a{
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: var(--clr-primary-5);
  transition: var(--transition);
}
.social-icons a:hover {
  color: var(--clr-primary-1);
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-white);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(--clr-red-dark);
  transition: var(--transition);
  transform: translate(-100%);
}
.show-sidebar {
  transform: translate(0);
}

@media screen and (min-width: 676px){
  .sidebar {
    widht: 400px;
  }
}
`
export default Sidebar
