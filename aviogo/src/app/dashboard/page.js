"use client"
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const handleSearch = () => {
    //fetch flight logic will be here
    //upon successful fetch redirect
    // else ask user to try again
    router.push("/booking");
  }

  return (
    /////////////////////////////
    /////////Dashboard Page////////// 
    /////////////////////////////
    <div className={styles.container}>
    {/* Landing Page */}
      <h1>LET THE SEARCH BEGIN...</h1>
      <p>Search flights</p>
      <div className={styles.searchContainer}>
        <div>
          <label>Departure Airport</label>
          <select defaultValue={"Select Airport"}>
          <option value="Select Airport" hidden disabled>Select Airport</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label>Arrival Airport</label>
          <select defaultValue={"Select Airport"}>
          <option value="Select Airport" hidden disabled>Select Airport</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label>Departure Date</label>
          <select defaultValue={"Select Date"}>
          <option value="Select Date" hidden  disabled>Select Airport</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label>Return Date</label>
          <select defaultValue={"Select Date"}>
          <option value="Select Date" hidden disabled>Select Airport</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <button type="button" onClick={()=> handleSearch()}>Search</button>
        </div>


        
      </div>
    </div>
  )
}
