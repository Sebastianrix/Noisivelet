import { useParams, Link } from 'react-router-dom'
import { poems } from '../data/poems'
import styles from './PoemPage.module.css'

export default function PoemPage() {
  const { id } = useParams()
  const poem = poems.find(p => p.id === Number(id))

  if (!poem) {
    return (
      <div className={styles.notFound}>
        <p>This poem has dissolved into the dark.</p>
        <Link to="/" className={styles.back}>&#8592; Return</Link>
      </div>
    )
  }

  const lines = poem.body.split('\n')

  return (
    <main className={styles.main}>
      <Link to="/" className={styles.back}>&#8592; All poems</Link>

      <article className={styles.poem}>
        <header className={styles.header}>
          <span className={styles.date}>{poem.date}</span>
          <h1 className={styles.title}>{poem.title}</h1>
          <span className={styles.ornament}>&#x2767;</span>
        </header>

        <div className={styles.body}>
          {lines.map((line, i) => (
            line === ''
              ? <div key={i} className={styles.stanzaBreak} />
              : <p key={i} className={styles.line}>{line}</p>
          ))}
        </div>
      </article>

      <nav className={styles.poemNav}>
        {poem.id > 1 && (
          <Link to={`/poem/${poem.id - 1}`} className={styles.navLink}>
            &#8592; Previous
          </Link>
        )}
        {poem.id < poems.length && (
          <Link to={`/poem/${poem.id + 1}`} className={styles.navLink + ' ' + styles.navNext}>
            Next &#8594;
          </Link>
        )}
      </nav>
    </main>
  )
}
