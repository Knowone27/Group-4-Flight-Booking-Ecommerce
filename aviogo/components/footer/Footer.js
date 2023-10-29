import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <image src="./aviogo_logo.png"  alt="logo" className={styles.logo}/>
        <p>
          Soaring above the cloud (computing). Remember, in our skies, turbulence is just another word for fun!
        </p>
    </div>
  )
}

export default Footer
