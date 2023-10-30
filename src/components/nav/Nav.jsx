import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import styles from './nav.module.css';
import { Link, useMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  const isActive = (path) => !!useMatch(path);
  const [showMobileDropDown, setshowMobileDropDown] = useState(false)

  return (
    <div className={`${styles.container} pd-vt pd-hz`}>
      <div className={styles.mobile_navigation}>
        {/*//Mobile Navigaiton Bar//*/}
        <div className={styles.mobileNavBar}>
          <Link to="/">
            <img src={logo} className={styles.logo} />
          </Link>
          <button type='button' onClick={()=> setshowMobileDropDown(!showMobileDropDown)}>
            {showMobileDropDown ?
              <FontAwesomeIcon icon={faTimes}/>
              :
              <FontAwesomeIcon icon={faBars}/>
            }
            
          </button>
        </div>
         {/*//Mobile Dropdown Menu//*/}
        <div className={`${styles.mobileDropDown} pd-hz pd-vt`} 
        style={showMobileDropDown ? {right:'0'} : {right:'-100%'}}
        >
          <Link to="/" className={isActive('/') ? styles.activeLink : ''}>
          Blog</Link>
          <Link to="/javascript" className={isActive('/javascript') ? styles.activeLink : ''}>Javascript</Link>
          <Link to="/python" className={isActive('/python') ? styles.activeLink : ''}>Python</Link>
          <Link to="/education" className={isActive('/education') ? styles.activeLink : ''}>Education</Link>
          <Link to="/connect" className={isActive('/connect') ? styles.activeLink : ''}>Connect</Link>
        </div>
      </div>

      {/*/Desktop Navigaiton//*/}
      <div className={styles.desktopNavigation}>
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>
        <Link to="/" className={isActive('/') ? styles.activeLink : ''}>Blog</Link>
        <Link to="/javascript" className={isActive('/javascript') ? styles.activeLink : ''}>Javascript</Link>
        <Link to="/python" className={isActive('/python') ? styles.activeLink : ''}>Python</Link>
        <Link to="/education" className={isActive('/education') ? styles.activeLink : ''}>Education</Link>
        <Link to="/connect" className={isActive('/connect') ? styles.activeLink : ''}>Connect</Link>
      </div>

    </div>
  );
};

export default Nav;
