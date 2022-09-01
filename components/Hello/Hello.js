import styles from './Hello.module.scss'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import GithubIcon from './GithubIcon'

export default function Hello() {
    return (
        <div className={styles.hello}>
            <div className={styles.hello_inner_1}>
                <h1>Hello.<br></br><span>I am Vugar</span></h1>
                <p>Student Dev, passionate about creating interactive applications.</p>
                <div className={styles.social_media_div}>
                    <div className={styles.social_media_div_inner}>
                        <LinkedinIcon></LinkedinIcon>
                        <a href='https://linkedin.com/in/vugar-nasraddinli' target="blank"><p>LinkedIn</p></a>
                    </div>
                    <div className={styles.social_media_div_inner}>
                        <InstagramIcon></InstagramIcon>
                        <a href='https://www.instagram.com/vugvr617/' target="blank"><p>Instagram</p></a>
                    </div>
                    <div className={styles.social_media_div_inner}>
                        <GithubIcon></GithubIcon>
                        <a href='https://github.com/vugvr617' target="blank"><p>GitHub</p></a>
                   </div>
                </div>
            </div>
            <div className={styles.hello_inner}>
                <img src="./notebook.png"></img>
            </div>
        </div>
    )
}