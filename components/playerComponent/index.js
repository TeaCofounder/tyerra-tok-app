import styles from '../../styles/VideoComponent.module.css'

export default function PlayerComponent ({ src }) {
  return (
    <video
      autoPlay
      className={styles.video}
      loop
      muted
      src={src}
      type='video/mp4'
    />
  )
}
