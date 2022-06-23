import VideoPlayer from '../playerComponent/index'
import styles from '../../styles/VideoReel.module.css'
const Vids = [
  {
    id: 1,
    src: 'https://videos-tyerra.s3.us-west-1.amazonaws.com/GManceraCortoTyerra.mp4'
  },
  {
    id: 2,
    src: 'https://videos-tyerra.s3.us-west-1.amazonaws.com/EnttornoCortoTyerra.mp4'
  },
  {
    id: 3,
    src: 'https://videos-tyerra.s3.us-west-1.amazonaws.com/D202CortoTyerra.mp4'
  }
]

export default function VideoReel () {
  return (
    Vids.map(vid => {
      return (
        <div key={vid.id} className={styles.vide}>
          <VideoPlayer {...vid} />
        </div>
      )
    })
  )
}
