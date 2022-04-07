import { Link } from "react-router-dom"
import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.black}>
            <article className={styles.text}>
                 <h1 className={styles.title} >Whiskey Lovers</h1>
                 <h3 className={styles.p} >Alcohol won’t solve your problems. Then again, neither will milk.</h3>
            </article>
                
                 <img className={styles.bottle} src="https://product-cdn.systembolaget.se/productimages/40608/40608_400.png" alt="jack-daniels" />
           
            <article className={styles.arrow}>
                 <Link  to="/WhiskyItems">
                     <img src="https://www.pinclipart.com/picdir/big/16-165843_corves-clipart-arched-2-curved-arrow-clip-art.png" alt="arrow" />
                 </Link>
           </article>
        </section>
    )
}

export default Home