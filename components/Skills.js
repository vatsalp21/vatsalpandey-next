import { Flex, Grid } from '../components/StyleComponents'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import sectionThree from '../images/sectionThree.png'

const skillsObj = [
    { name: 'React.js', level: '60%' },
    { name: 'Node.js', level: '50%' },
    { name: 'Python', level: '40%' },
    { name: 'Adobe Premiere Pro', level: '75%' },
    
]

export const Skills = () => (
    <Flex className={styles.skillsParent}>
        <div className={styles.skillSection}>
            <h1 className={styles.sectionHeading}>{'=> Skills'}</h1>
            <Grid className={styles.skillsGrid}>
                {skillsObj.map((skill, index) => (
                    <div key={index}>
                        <p>{`${skill.name} ->`}</p>
                        <div style={{ width: skill.level }} className={styles.skillLevel}></div>
                    </div>
                ))}
            </Grid>
        </div>
        <div className={styles.sectionThreeImage}>
            <Image src={sectionThree} alt="sectionThree" />
        </div>
    </Flex>
)