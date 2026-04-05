import logo from '../../assets/Logo.svg'
import styles from './Header.module.css'

// Componente fixo de topo da página.
// Exibe a logo centralizada com dimensões definidas (156x29).
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Dimensões explícitas evitam layout shift enquanto a imagem carrega */}
      <img src={logo} alt="Logo" width={156} height={29} />
    </header>
  )
}

export default Header
