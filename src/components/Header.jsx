import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <span className={styles.brandSymbol}>&#x2767;</span>
        <span className={styles.brandName}>Noisivelet</span>
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={pathname === '/' ? styles.active : ''}>Poems</Link>
        <Link to="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
      </nav>
    </header>
  )
}
