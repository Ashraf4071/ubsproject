// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed;
`;

const SidebarItem = styled.div`
  padding: 10px;
  font-size: 18px;
  margin: 10px 0;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;


const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem><Link className='linkdash' to="/dashboard">Dashboard</Link></SidebarItem>
      <SidebarItem><Link className='linkcourse' to="/courses">Courses</Link></SidebarItem>
      <SidebarItem><Link className='linkassignments' to="/assignments">Assignments</Link></SidebarItem>
      <SidebarItem><Link className='linkgrade' to="/grades">Grades</Link></SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
