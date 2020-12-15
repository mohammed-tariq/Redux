export const userName = (name) => async (dispatch) =>{

  try{
    dispatch({
        type:'ADD_USER',
        payload:name
    })
  }
  catch(err){
    console.log(err.message)
  }
}