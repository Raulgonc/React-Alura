import heroImage from '../../assets/Hero_image_Desktop.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={heroImage} alt="Hero" width={1124} height={589} className={styles.heroImage} />
    </section>
  )
}

export default Hero
