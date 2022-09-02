import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/Navigation/NavBar';
import styles from '../styles/index.module.scss'
import Hello from '../components/Hello/Hello';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

export default function Home() {
  return (
    <div className={styles.main}>
      <NavBar></NavBar>
      <Hello></Hello>
      <About></About>
      <Projects></Projects>
      <div className={styles.background_div}></div>
    </div>
  )
}
