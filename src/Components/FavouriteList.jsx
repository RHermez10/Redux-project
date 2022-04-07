import {useSelector,useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { removeWhisky } from "../actions/addRemoveAction"
import styles from './FavouriteList.module.css'


function FavouriteList(){
    const addedWhisky= useSelector((state) => state.allWhiskys.list);
    const dispatch = useDispatch()
    
    return(
        <section>
            <Link to="/WhiskyItems" >
            <button className={styles.btn}  >HOME</button>
            </Link>
            
             <h1 className={styles.title} >FAVOURITE WHISKIES</h1>
             
              {
                 addedWhisky.map((whisky, i)=>(
                      <section key={i}>
                             <section className={styles.wrapper}>

                                <article>
                                  <img className={styles.img} src={whisky.img} alt="" />
                                </article>
                      
                                <article className={styles.text} >
                                  <h3>{whisky.name}</h3>
                                  <h1> {whisky.country} </h1>
                                </article>

                                 <article>
                                   <button className={styles.removeBtn}  onClick={()=> dispatch(removeWhisky(whisky)) }>Remove</button>
                                 </article>
                             </section>
                
                       </section>
            ))}
        </section>
    )
}

export default FavouriteList