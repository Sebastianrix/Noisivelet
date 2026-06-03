import { Link } from 'react-router-dom'
import { collections, poems } from '../data/poems'
import TwigDivider from './TwigDivider'
import styles from './CollectionsPage.module.css'

export default function CollectionsPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Collections</h1>
        <p className={styles.sub}>Poems gathered by theme and obsession.</p>
      </header>

      <div className={styles.divider}>
        <span className={styles.line} />
        <TwigDivider />
        <span className={styles.line} />
      </div>

      <div className={styles.list}>
        {collections.map(col => {
          const colPoems = poems.filter(p => col.poemIds.includes(p.id))
          return (
            <Link key={col.id} to={`/collection/${col.id}`} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.count}>{colPoems.length} poem{colPoems.length !== 1 ? 's' : ''}</span>
              </div>
              <h2 className={styles.cardTitle}>{col.title}</h2>
              <p className={styles.desc}>{col.description}</p>
              <ul className={styles.poemList}>
                {colPoems.map(p => (
                  <li key={p.id}>{p.title}</li>
                ))}
              </ul>
              <span className={styles.enter}>Enter collection &#8594;</span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
