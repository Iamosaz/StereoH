import React from 'react';
import { Outlet } from 'react-router-dom';
import Services from '../Components/Services/Services';

const MonetizeLayout = () => {
  return (
    <div>
      {/* This Outlet will render the child components based on the route */}
      <Services/>
      <Outlet />
    </div>
  );
};

export default MonetizeLayout;
