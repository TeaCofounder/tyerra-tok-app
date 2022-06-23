import { UploadButton } from './uploadButton'
import styles from '../../styles/ActionBar.module.css'

export default function ActionBar () {
  const handleUploadClick = () => {
    window.alert('Upload')
  }
  return (
    <div className={styles.actionbar}>
      <button onClick={handleUploadClick} className={styles.action}>
        <UploadButton />
        <span title='Subir' />
      </button>
    </div>
  )
}
