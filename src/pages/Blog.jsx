import React, { useContext, useEffect } from 'react'
import BlogCom from '../components/blog/BlogCom'
import { NavBarContext } from '../context/NavContext';

const Blog = () => {
  const [navOpen] = useContext(NavBarContext);
    useEffect(() => {
      if (navOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
      return () => {
        document.body.style.overflowY = 'auto';
      };
    }, [navOpen]);

  return (
    <div >
        <BlogCom/>
    </div>
  )
}

export default Blog