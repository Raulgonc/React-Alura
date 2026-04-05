import heroImage from '../../assets/Hero_image_Desktop.png'
import styles from './Hero.module.css'

// Seção de destaque (banner) da página principal.
// Exibe a imagem centralizada sobre um fundo com degradê de #17DCB3 para #06151A.
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Dimensões fixas (1124x589) para manter a proporção correta da imagem */}
      <img src={heroImage} alt="Hero" width={1124} height={589} className={styles.heroImage} />
    </section>
  )
}

export default Hero
