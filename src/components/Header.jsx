import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  { to: '/',            label: 'Poems' },
  { to: '/collections', label: 'Collections' },
  { to: '/journal',     label: 'Journal' },
  { to: '/about',       label: 'About' },
]

function isActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname.startsWith(to)
}

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <span className={styles.brandSymbol}>&#x2767;</span>
        <span className={styles.brandName}>Noisivelet</span>
      </Link>
      <nav className={styles.nav}>
        {NAV.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={isActive(pathname, to) ? styles.active : ''}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
