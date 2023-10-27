import styles from './passengerInformation.module.css'
const page = () => {
  return (
    <div>
        <a href = "/login">
          <img src = "/images/icons8-back-button-96 3.png" className={styles.backButton} alt = 'Back'></img>
        </a>
        <h1>Enter Passenger Information Below</h1>
        <br/>
        <br/>
        <div className={styles.whiteBox}>
          <div>
            <img src = '/images/icons8-delta-airlines-96 1.png' className={styles.airline}></img>
            Delta Airlines
          </div>
          <div className = {styles.flightInfo}>
            Confirm Your Trip Details
            <p className = {styles.bold}>FLIGHT D623XE</p>
          </div>
          <p className={styles.genText}>*Please enter your information as it shows on your passport or ID</p>
          <br/>
          
          <div className={styles.passInfo}>
            Passenger 1
            <br/>
            <div>
              <input
                type="text"
                hint
                className={styles.textBox}
                id="firstName"
                placeholder = "First Name"
                required
              />
              <input
                type="text"
                className={styles.textBox}
                id="lastName"
                placeholder = "Last Name"
                required
              />
              <br></br>
              <input
                type="text"
                className={styles.textBox}
                id="IDNum"
                placeholder = "ID Number"
                required
              />
              <input
                type="date"
                className={styles.textBox}
                id="dob"
                required
              />
              <br/>
              <input
                type="text"
                className={styles.longInput}
                id="address"
                placeholder = "Home Address"
                required
              />
              
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
              <p>Payment Information</p>
              <br/>
              <input
                type="text"
                className={styles.longInput}
                id="cardNum"
                placeholder = "Card Number"
                required
              />
              <input
                type="text"
                className={styles.textBox}
                id="expNUm"
                placeholder = "Expiration Number"
                required
              />
              <input
                type="text"
                className={styles.shortInput}
                id="cvv"
                placeholder = "CVV"
                required
              />
              <br/>
              <input
                type="text"
                className={styles.longInput}
                id="cardName"
                placeholder = "Name On Card"
                required
              />
              <input
                type="text"
                className={styles.billing}
                id="billing"
                placeholder = "Billing Address"
                required
              />
              <input
                type="text"
                className={styles.city}
                id="city"
                placeholder = "City"
                required
              />
              <input
                type="text"
                className={styles.state}
                id="state"
                placeholder = "State"
                required
              />
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default page