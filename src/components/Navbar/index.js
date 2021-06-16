import React, { useState } from 'react';
import { MenuItems } from '../../routes';
import './Navbar.css';

const Navbar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (props.onChange) props.onChange(search);
  };

  return (
    <nav className='NavbarItems'>
      <div className='link-items'>
        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='coin-search'>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
