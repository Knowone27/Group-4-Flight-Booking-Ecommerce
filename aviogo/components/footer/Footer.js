import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <img src="./aviogo_logo.png" className={styles.logo}/>
        <p>
          Soaring above the cloud (computing). Remember, in our skies, turbulence is just another word for fun!
        </p>
    </div>
  )
}

export default Footer