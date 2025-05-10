import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: #f9f9f990;
  border-radius
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: black;
  font-size: 1.1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    
    <div style={{ backgroundColor : "#ffffffeb", height : '70px',  }} className='fixed rounded-lg z-[6000]  top-0 left-0 z-100 flex justify-between items-center text-black  h-[100px] w-full mx-auto p-[20px]' >
      <Logo>
        <Link to="/">
          <img src="/logo.png" alt="Elite Studio" />
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/company">Company</NavLink> */}
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </div>
  );
};

export default Header; 