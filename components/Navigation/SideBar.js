import styles from './NavBar.module.scss'
import { useEffect, useState, useRef } from 'react'
import ListIcon from './ListIcon';
import MobileMenu from './MobileMenu';

export default function SideBar() {
    const [windowWidth, setWidth] = useState();
    const [isMenuOpen, setMenu] = useState(false);
    const widthRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const iconClickHandler = () => {
        setMenu((prevState) => { return prevState = !prevState });
        console.log(isMenuOpen)
    }

    if (windowWidth > 900) {
        return (
            <div ref={widthRef} className={styles.nav}>
                <a>Hello</a>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        )
    } else {
        return (
            <div>
                <ListIcon iconClickHandler={iconClickHandler}></ListIcon>
                <MobileMenu iconClickHandler={iconClickHandler} isMenuOpen={isMenuOpen}></MobileMenu>
            </div>
        )
    }
}

