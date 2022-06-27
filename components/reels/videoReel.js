import VideoPlayer from '../playerComponent/index'
import styles from '../../styles/VideoReel.module.css'

export default function VideoReel (props) {
  if (props) {
    return (
      props.videos.map(vid => {
        return (
          <div key={vid.id} className={styles.vide}>
            <VideoPlayer {...vid} />
          </div>
        )
      })
    )
  } else {
    return (
      <h2 className='subtitle'>
        You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
        for instructions.
      </h2>
    )
  }
}
