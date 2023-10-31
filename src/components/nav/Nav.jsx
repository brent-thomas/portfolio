import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import styles from './nav.module.css';
import { Link, useMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  const isActive = (path) => !!useMatch(path);
  const [showMobileDropDown, setshowMobileDropDown] = useState(false)

  return (
    <div className={styles.container}>
      <div className={`${styles.mobile_navigation} pd-hz pd-vt`}>
        {/*//Mobile Navigation Bar//*/}
        <div className={`${styles.mobileNavBar}`}>
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
         <div className={`${styles.mobileDropDown}`} 
         style={showMobileDropDown ? {transform: 'translateX(0)'} : {transform: 'translateX(100%)'}} >

          <Link to="/" className='pd-hz pd-vt' onClick={()=> setshowMobileDropDown(false)}>
              <div className={styles.menuItem}>
                  <p className={isActive('/') ? styles.activeLink : ''}>Blog</p>
                  <FontAwesomeIcon icon={faChevronRight}/>
              </div>
          </Link>

          <Link to="/javascript" className='pd-hz pd-vt' onClick={()=> setshowMobileDropDown(false)}>
            <div className={styles.menuItem}>
                <p className={isActive('/javascript') ? styles.activeLink : ''}>Javascript</p>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
          </Link>

          <Link to="/python" className='pd-hz pd-vt' onClick={()=> setshowMobileDropDown(false)}>
              <div className={styles.menuItem}>
                  <p className={isActive('/python') ? styles.activeLink : ''}>Python</p>
                  <FontAwesomeIcon icon={faChevronRight}/>
              </div>
          </Link>

          <Link to="/education" className='pd-hz pd-vt' onClick={()=> setshowMobileDropDown(false)}>
              <div className={styles.menuItem}>
                  <p className={isActive('/education') ? styles.activeLink : ''}>Education</p>
                  <FontAwesomeIcon icon={faChevronRight}/>
              </div>
          </Link>

          <Link to="/connect" className='pd-hz pd-vt' onClick={()=> setshowMobileDropDown(false)}>
              <div className={styles.menuItem}>
                  <p className={isActive('/connect') ? styles.activeLink : ''}>Connect</p>
                  <FontAwesomeIcon icon={faChevronRight}/>
              </div>
          </Link>
        </div>
      </div>

      {/*/Desktop Navigaiton//*/}
      <div className={`${styles.desktopNavigation} pd-hz pd-vt`}>
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
