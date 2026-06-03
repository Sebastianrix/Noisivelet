import { poems } from '../data/poems'
import PoemCard from './PoemCard'
import GloomyScene from './GloomyScene'
import TwigDivider from './TwigDivider'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <GloomyScene />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Verses from the Dark</h1>
          <p className={styles.heroSub}>
            A collection of poems written between dusk and the small hours.
          </p>
        </section>

        <section className={styles.divider}>
          <span className={styles.dividerLine} />
          <TwigDivider />
          <span className={styles.dividerLine} />
        </section>

        <section className={styles.grid}>
          {poems.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </section>
      </main>
    </>
  )
}
