import styles from './AboutPage.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <article className={styles.about}>
        <span className={styles.ornament}>&#x2767;</span>
        <h1 className={styles.title}>About</h1>

        <div className={styles.body}>
          <p>
            These poems were written in the hours when sleep refuses to come and
            the world outside has finally gone quiet. They are not about darkness
            for the sake of it — they are about the particular texture of certain
            feelings, and the strange comfort of naming them precisely.
          </p>
          <p>
            If something here finds you, that is enough.
          </p>
        </div>

        <footer className={styles.sig}>
          <span className={styles.dash}>&#x2014;</span> The Poet
        </footer>
      </article>
    </main>
  )
}
