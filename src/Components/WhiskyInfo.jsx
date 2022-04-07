import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { addWhisky } from "../actions/addRemoveAction"
import styles from "./WhiskyInfo.module.css"


function WhiskyInfo(){
//På min button längs ner så dispatchar jag action "addWhisky" i onclick. Så ner man trycker på knappen 
//så ska statet uppdateras och då läggs den whiskey man väljer i favourite list. 
    const chosenWhisky = useSelector((state) => state.allChosen.chosen);
    const dispatch = useDispatch()

    return(
        <section className={styles.yellowBackground}>
           <article>
               <Link to="/WhiskyItems">
                   <button className={styles.homeBtn}>HOME</button>
                </Link>
                 
                  <img src={chosenWhisky.img} className={styles.imgBottle} alt="bottle"/>
           </article>
           
           <article className={styles.white}>
               <article className={styles.texxt}>
                  
                    <h1 className={styles.name} > {chosenWhisky.name} </h1>
                    <h3 className={styles.margin}> {chosenWhisky.text} </h3>
               
               </article>
                   <p className={styles.paragraph}> {chosenWhisky.description} </p>
                   
               <article className={styles.infos}>
                   <p>Made in: {chosenWhisky.country} </p>
                   <p>Volume: {chosenWhisky.volume} </p>
               </article>
               
                <Link to="/FavouriteList">
                   <button className={styles.faveBtn} onClick={()=>dispatch(addWhisky(chosenWhisky))} > Add to Favourite</button>
                </Link>
           </article>
        </section>
    )
}

export default WhiskyInfo