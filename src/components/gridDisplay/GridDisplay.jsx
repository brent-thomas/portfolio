import React from 'react';
import styles from './gridDisplay.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'


const handleIcon = (key) => {
    if(key === 'Github') return faGithub
    else if(key === 'Youtube') return faYoutube
    else return faLink
}

const handleClass = (key) => {
    if(key === 'Github') return styles.GithubLink
    else if(key === 'Youtube') return styles.YoutubeLink
    else return null
}

const GridDisplay = ({ items }) => {
    return (
        <div className={styles.grid}>
            {items.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <div className={styles.titleContainer}>
                        <p className={styles.title}>{item.title}</p>
                        {item.source ?
                        <p className={styles.source}>{item.source}</p>
                        :
                        null
                        }
                    </div>
                    <div className={styles.description}>
                    <p>{item.description}</p>
                    </div>
                    <div className={styles.linksContainer}>
                        {item.links ? 
                            item.links.map((item, index) => (
                                <div key={index}>
                                    {Object.keys(item).map((key) => (
                                        <a 
                                        className={handleClass(key)}
                                        target='_blank'
                                        href={item[key]} 
                                        key={key}
                                        >
                                            <FontAwesomeIcon icon={handleIcon(key)} className={styles.FAicon} />
                                            {key}
                                        </a>
                                    ))}
                                </div>
                            ))
                            :
                            null
                        }
                    </div>
                </div>
                // item.type === 'education' ?
                // <EducationItem key={index} item={item}/>
                // :
                // item.type === 'project' ?
                //     <ProjectItem key={index} item={item}/>
                // :
                // null
            ))}
        </div>
    
    );
};

export default GridDisplay;




// const EducationItem = (education) => {
//     const item = education.item
//     return (
//         <div className={`${styles.gridItem}`}>
//             <img src={item.img} className={styles.itemImg}/>
//             <div className={styles.textContainer}>
//             <p className={styles.title}>{item.title}</p>
//             <p className={styles.source}>{item.source}</p>
//             <p className={styles.description}>{item.description}</p>
//             {item.link ? 
//             <a target='_blank' href={item.link}>View credential</a>:null
//             }
//             </div>
//         </div>
         
//     )
    
// }


// const ProjectItem = (project) => {
//     const item = project.item
//     return(
//         <div className={`${styles.gridItem}`}>

//             <div className={styles.textContainer}>
//             <p className={styles.title}>{item.title}</p>
//             <p className={styles.description}>{item.description}</p>

//             <div className={styles.flex}>
//                 <div>
//                     <a href={item.github}  target="_blank" className={styles.github_button}>
//                         <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
//                         <p>Source Code</p>
//                     </a>
//                 </div>
//                 <div>
//                     <a href={item.youtube} target="_blank" className={styles.youtube_button}> 
//                         <FontAwesomeIcon className={styles.icon} icon={faYoutube}/>
//                         <p>
//                         View Demo
//                         </p>
//                     </a>
//                 </div>
//             </div>
//             </div>
           
//         </div>
//     )
// }