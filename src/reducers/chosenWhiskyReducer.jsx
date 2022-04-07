//tom arra som ska ta emot den whiskey man väljer
const initialState ={
    chosen:[]
};

//Tar emot statet och returnerar det nya state som är då info om den whiskey man klickar på när man trycker 
//på more info knappen.  
export const chosenWhiskyReducer =(state= initialState,action)=>{
    switch(action.type){
           case 'CHOSEN_WHISKY':
            return {...state, chosen: action.payload };

             default:
                   return state
    }
}