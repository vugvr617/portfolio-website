import Logo from "./Logo";
import styles from './NavBar.module.scss'
import { slide as Menu } from 'react-burger-menu';
import SideBar from "./SideBar";

export default function NavBar() {
    return (
        <div className={styles.main}>
            <div className={styles.nav_main}>
                <Logo></Logo>
                <SideBar></SideBar>
            </div>
        </div>
    )
}