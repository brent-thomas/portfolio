import styles from './connect.module.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faEnvelope, faFrog, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHackerrank, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  return (
    <div className={styles.container}>
         {/*/Social Links//*/}
            <h2>Connect With Me</h2>
            <div>

            
            <Link target="_blank" to="https://www.linkedin.com/in/ken1098/" className={styles.socialLink}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} id={styles.linkedin}/>
                <p>LinkedIn</p>
            </Link>

            <Link target="_blank" to="https://github.com/brent-thomas" className={styles.socialLink}>
                <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                <p>GitHub</p>
            </Link>

            <Link target="_blank" to="https://www.hackerrank.com/profile/brent48" className={styles.socialLink}>
                <FontAwesomeIcon icon={faHackerrank} className={styles.icon} id={styles.hackerrank}/>
                <p>HackerRank</p>
            </Link>

            <Link target="_blank" to="https://teamtreehouse.com/profiles/brentthomas4" className={styles.socialLink}>
                <FontAwesomeIcon icon={faFrog} className={styles.icon} id={styles.treehouse}/>
                <p>Treehouse</p>
            </Link>
            <a href="mailto:brent@itsnotabugitsafeature.com?subject=Job Offer&body=Hello Brent! We'd love to offer you a position as a (insert job title) at (insert company name), with an annual salary of (all the monies 😉). When can you start?" className={styles.socialLink}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} id={styles.email}/>
                <p>Email</p>
            </a>
        </div>
    </div>
  )
}

export default Connect