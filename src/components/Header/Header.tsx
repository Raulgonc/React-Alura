import logo from '../../assets/Logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" width={156} height={29} />
    </header>
  )
}

export default Header
