 export const setWhiskys = (whiskys) => {
     return {
         type: 'SET_WHISKYS',
         payload: whiskys,
     };
 };

 export const addWhisky = (whisky) => {
     return {
         type: 'ADD_WHISKY',
         payload: whisky,
     };
 };

 export const removeWhisky = (whisky) => {
     return {
         type: 'REMOVE_WHISKY',
         payload: whisky,
     };
 };