import styles from './About.module.scss';
import CodeIcon from './CodeIcon';
import WorkIcon from './WorkIcon';

export default function About() {
    return (
        <div className={styles.about}>
            <div>
                <h1>About.</h1>
                <p>Currently, I am gaining
                    bachelor’s degree in Computer Science faculty of Eötvös Loránd University in Budapest, <br></br>
                    and discovering different aspects of programming.</p>
                <div className={styles.about_inner}>
                    <div className={styles.about_inner_1}>
                        <div>
                            <div className={styles.icon_div}>
                                <CodeIcon></CodeIcon>
                                <p>Education</p>
                            </div>
                            <h1>Eötvös Lorand University</h1>
                            <p>The oldest and largest university in Hungary and it is the most popular higher education an institution among applicants each year. As the leading research university in Hungary, the name of ELTE means knowledge, competition, openness and community.
                            </p>
                        </div>
                    </div>
                    <div className={styles.about_inner_1}>
                        <div>
                            <div className={styles.icon_div}>
                                <WorkIcon></WorkIcon>
                                <p>Profile</p>
                            </div>
                            <h1>Who am I ?</h1>
                            <p>I am 19 years old student developer from Azerbaijan, studying and living in Budapest. I started my university period in September of 2021, and during that time I have developed a strong understanding of the latest technologies and trends in the industry. I gained practical programming knowledge from the university, and besides university studies, I individually learned web development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.skills_main}>
                    <h1>Skills.</h1>
                    <div className={styles.skills_grid}>
                        <div className={styles.skills_div}>
                            <img src="./jsimg.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./reactimg.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./nextjs.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./html-5.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./css-3.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./sass.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./c++.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./java.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./giticon.png"></img>
                        </div>
                        <div className={styles.skills_div}>
                            <img src="./nodejs.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}