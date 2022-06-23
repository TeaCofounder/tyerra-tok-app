import styles from '../../styles/VideoComponent.module.css'

const src = 'https://videos-tyerra.s3.us-west-1.amazonaws.com/GManceraCortoTyerra.mp4'

export default function PlayerComponent () {
  return (
    <video autoPlay src={src} type='video/mp4' className={styles.video} muted loop />
  )
}
