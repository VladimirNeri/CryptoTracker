import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link className={item.cName} to={item.url} href={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <a
            className='nav-github'
            href='https://github.com/VladimirNeri/CryptoTracker'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
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
