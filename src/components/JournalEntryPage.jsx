import { useParams, Link } from 'react-router-dom'
import { journal } from '../data/journal'
import styles from './JournalEntryPage.module.css'

export default function JournalEntryPage() {
  const { id } = useParams()
  const entry = journal.find(e => e.id === Number(id))

  if (!entry) {
    return (
      <div className={styles.notFound}>
        <p>This entry has been lost to the dark.</p>
        <Link to="/journal" className={styles.back}>&#8592; Journal</Link>
      </div>
    )
  }

  return (
    <main className={styles.main}>
      <Link to="/journal" className={styles.back}>&#8592; Journal</Link>

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.date}>{entry.date}</span>
          <h1 className={styles.title}>{entry.title}</h1>
          <span className={styles.ornament}>&#x2767;</span>
        </header>

        <div className={styles.body}>
          {entry.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <nav className={styles.entryNav}>
        {entry.id > 1 && (
          <Link to={`/journal/${entry.id - 1}`} className={styles.navLink}>
            &#8592; Previous
          </Link>
        )}
        {entry.id < journal.length && (
          <Link to={`/journal/${entry.id + 1}`} className={`${styles.navLink} ${styles.navNext}`}>
            Next &#8594;
          </Link>
        )}
      </nav>
    </main>
  )
}
