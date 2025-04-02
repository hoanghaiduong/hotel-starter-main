import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const {pathname}=useLocation()
  useEffect(() => {
    
    window.scrollTo(0, 0)
    return () => {
      
    }
  }, [pathname])
  
  return <div>ScrollToTop</div>;
};

export default ScrollToTop;
