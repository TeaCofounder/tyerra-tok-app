import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VideoReel from '../components/reels/videoReel'
import ActionBar from '../components/footerComponent/actionBar'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyerra Tok</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img className={styles.logo} alt='logo' src='/SoloLogoColor.webp' />
          <h3>Tyerra Tok</h3>
        </div>
        <VideoReel />
      </main>
      <ActionBar />
    </div>
  )
}
