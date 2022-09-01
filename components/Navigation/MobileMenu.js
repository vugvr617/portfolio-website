import styles from './NavBar.module.scss'

export default function MobileMenu(props) {
    return (
        <div>
            {props.isMenuOpen && <div>
                <div onClick={props.iconClickHandler} className={styles.list_bg}></div>
            </div>}
            {props.isMenuOpen && <div className={styles.menu}>
                <div className={styles.menu_inner}>
                    <a>Hello</a>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>
            </div>}
        </div>
    )
}