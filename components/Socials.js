import styles from '../styles/Home.module.scss'
import { Grid } from '../components/StyleComponents'

const socialIcons = [
    {
        src: '/icons/instagram.svg',
        alt: 'instagram',
        link: 'https://instagram.com/vatsalpandey_'
    },
    {
        src: '/icons/linkedin.svg',
        alt: 'linkedin',
        link: 'https://linkedin.com/in/vatsal-pandey-744652249/'
    },
    {
        src: '/icons/github.svg',
        alt: 'git-hub',
        link: 'https://github.com/vatsalp21'
    }
]

const Socials = () => (
    <Grid className={styles.socials}>
        {socialIcons.map((social, index) => (
            <a key={index} className={styles.socialIcons} href={social.link} target="_blank" rel="noopener noreferrer">
                <img id={social.alt} src={social.src} alt={social.alt} />
            </a>
        ))}
    </Grid>
)

export default Socials
