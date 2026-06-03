import { Link } from 'react-router-dom'
import styles from './PoemCard.module.css'

export default function PoemCard({ poem }) {
  return (
    <Link to={`/poem/${poem.id}`} className={styles.card}>
      <span className={styles.date}>{poem.date}</span>
      <h2 className={styles.title}>{poem.title}</h2>
      <p className={styles.excerpt}>{poem.excerpt}</p>
      <span className={styles.read}>Read poem &#8594;</span>
    </Link>
  )
}
