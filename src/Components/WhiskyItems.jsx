import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setWhiskys} from '../actions/addRemoveAction'
import {Link} from 'react-router-dom'
import { chosenWhisky } from '../actions/chosenWhiskyAction';
import styles from './WhiskyItems.module.css'

//fetch där jag tar emot mitt api
function WhiskyItems(){
    useSelector((state) => state.allWhiskys.whiskys);
    const [whiskeyList,setWhiskeyList]=useState([])
    const dispatch = useDispatch();
    
    const url= 'http://localhost:5000/whisky.json'
      
    useEffect(()=>{
       fetch(url)
       .then(result => result.json())
       .then(data=>(setWhiskeyList(data))) 
  }, [])
   
  //Dispatchar setWhiskys action och uppdatterar den initialStatet och returnerar den till mitt api data.
 dispatch(setWhiskys(whiskeyList))

  
  return(
        <section>
            <Link to="/FavouriteList">
                <img className={styles.heart} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/800px-Ei-heart.svg.png" alt="heart" />
            </Link>
               <h1 className={styles.rubrik} >Collection of the best whiskies</h1>

            {
              whiskeyList.map((whisky,index)=>(
                    <section className={styles.product} key={index}>
                        <img className={styles.img} src={whisky.img} alt="bottle"  />
                        <h2> {whisky.name} </h2>
                        <Link to="/WhiskyInfo">
                        <button className={styles.moreBtn} onClick={()=>dispatch(chosenWhisky(whisky))} >More info</button>
                        </Link>
                    </section>
                ))
            }
        </section>
    )
}

export default WhiskyItems