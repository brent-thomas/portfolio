import React from 'react';
import styles from './GridDisplay.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const GridDisplay = ({ items }) => {
    return (
        <div className={styles.grid}>
            {items.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.flex}>
                        <div>
                            <a href={item.github}  target="_blank" className={styles.github_button}>
                                <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
                                <p>Source Code</p>
                            </a>
                        </div>
                        <div>
                            <a href={item.youtube} target="_blank" className={styles.youtube_button}> 
                                <FontAwesomeIcon className={styles.icon} icon={faYoutube}/>
                                <p>
                                View Demo
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridDisplay;
