import React from 'react';
import { Outlet } from 'react-router-dom';

import Monetization from '../Components/Monetization/Monetization';

const MonetizeLayout = () => {
  return (
    <div>
      {/* This Outlet will render the child components based on the route */}
      <Monetization/>
      <Outlet />
    </div>
  );
};

export default MonetizeLayout;
