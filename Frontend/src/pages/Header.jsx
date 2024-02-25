import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div>
        <header className='flex justify-between mb-12'>
          <Link to='/'>
            <h1 className='font-bold text-xl'>Prateek Blog</h1>
          </Link>

          <nav>
            <ul className='flex space-x-4'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
