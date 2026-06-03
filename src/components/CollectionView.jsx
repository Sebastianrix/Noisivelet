import { useParams, Link } from 'react-router-dom'
import { collections, poems } from '../data/poems'
import PoemCard from './PoemCard'
import styles from './CollectionView.module.css'

export default function CollectionView() {
  const { id } = useParams()
  const col = collections.find(c => c.id === id)

  if (!col) {
    return (
      <div className={styles.notFound}>
        <p>This collection has dissolved into the dark.</p>
        <Link to="/collections" className={styles.back}>&#8592; Collections</Link>
      </div>
    )
  }

  const colPoems = poems.filter(p => col.poemIds.includes(p.id))

  return (
    <main className={styles.main}>
      <Link to="/collections" className={styles.back}>&#8592; All collections</Link>

      <header className={styles.header}>
        <span className={styles.ornament}>&#x2767;</span>
        <h1 className={styles.title}>{col.title}</h1>
        <p className={styles.desc}>{col.description}</p>
      </header>

      <div className={styles.grid}>
        {colPoems.map(poem => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </main>
  )
}
