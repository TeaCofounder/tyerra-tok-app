import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VideoReel from '../components/reels/videoReel'
import ActionBar from '../components/footerComponent/actionBar'
import dbConnect from '../lib/mongodb'
import Video from '../models/Video'

export default function Home (props) {
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
        <VideoReel connected={props.isConnected} videos={props.videos} />
      </main>
      <ActionBar />
    </div>
  )
}

export async function getServerSideProps () {
  await dbConnect()

  /* find all the data in our database */
  const result = await Video.find({})
  const vids = result.map((doc) => {
    const vid = doc.toObject()
    vid._id = vid._id.toString()
    return vid
  })

  return { props: { isConnected: true, videos: vids } }
}
