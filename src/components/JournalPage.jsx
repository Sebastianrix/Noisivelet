import { Link } from 'react-router-dom'
import { journal } from '../data/journal'
import TwigDivider from './TwigDivider'
import styles from './JournalPage.module.css'

export default function JournalPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Journal</h1>
        <p className={styles.sub}>Notes on process, obsession, and the difficulty of saying things accurately.</p>
      </header>

      <div className={styles.divider}>
        <span className={styles.line} />
        <TwigDivider />
        <span className={styles.line} />
      </div>

      <div className={styles.list}>
        {journal.map(entry => (
          <Link key={entry.id} to={`/journal/${entry.id}`} className={styles.entry}>
            <span className={styles.date}>{entry.date}</span>
            <h2 className={styles.entryTitle}>{entry.title}</h2>
            <p className={styles.excerpt}>{entry.excerpt}</p>
            <span className={styles.read}>Read &#8594;</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
