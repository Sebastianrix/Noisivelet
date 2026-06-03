import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <span className={styles.ornament}>&#x2767;</span>
        <h1 className={styles.title}>Nothing Here</h1>
        <p className={styles.body}>
          This page has receded into the dark.<br />
          Whatever you were looking for is gone, or never was.
        </p>
        <Link to="/" className={styles.home}>&#8592; Return to the poems</Link>
      </div>
    </main>
  )
}
