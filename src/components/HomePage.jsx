import { poems } from '../data/poems'
import PoemCard from './PoemCard'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.heroEpigraph}>&#x2767;</p>
        <h1 className={styles.heroTitle}>Verses from the Dark</h1>
        <p className={styles.heroSub}>
          A collection of poems written between dusk and the small hours.
        </p>
      </section>

      <section className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerGlyph}>&#x2722;</span>
        <span className={styles.dividerLine} />
      </section>

      <section className={styles.grid}>
        {poems.map(poem => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </section>
    </main>
  )
}
