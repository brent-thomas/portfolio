import React from 'react';
import styles from './GridDisplay.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const GridDisplay = ({ items }) => {
    return (
        <div className={styles.grid}>
            {items.map((item, index) => (
                item.type === 'education' ?
                <EducationItem key={index} item={item}/>
                :
                item.type === 'project' ?
                    <ProjectItem key={index} item={item}/>
                :
                null
            ))}
        </div>
    
    );
};

export default GridDisplay;




const EducationItem = (education) => {
    const item = education.item
    return (
        <div className={`${styles.gridItem}`}>
            <img src={item.img} className={styles.itemImg}/>
            <div className={styles.textContainer}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.source}>{item.source}</p>
            <p className={styles.description}>{item.description}</p>
            {item.link ? 
            <a target='_blank' href={item.link}>View credential</a>:null
            }
            </div>
        </div>
         
    )
    
}


const ProjectItem = (project) => {
    const item = project.item
    return(
        <div className={`${styles.gridItem}`}>

            <div className={styles.textContainer}>
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
           
        </div>
    )
}