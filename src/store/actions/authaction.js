export const SignIn= (info)=>
{
    return (dispatch,getState,{getFirebase})=>
    {
    
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            info.Email,
            info.Password
        ).then(()=>
        dispatch({type:'loginSuccess'})).catch((err)=>
        dispatch({type:'Login Failed'},err))
    }
}
export const SignOut= ()=>
{
    return (dispatch,getState,{getFirebase})=>
    {
    
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>
        dispatch({type:'Signout Success'})).catch((err)=>
        dispatch({type:'Signout Failed'},err))
    }
}
export const SignUp =(info)=>
{
    return(dispatch,getState,{getFirebase,getFirestore})=>
    {
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            info.Email,
            info.Password
        ).then((resp)=>{
            console.log(info)
            return firestore.collection('user').doc(resp.user.uid).set({
                firstname:info.FirstName,
                lastname:info.LastName,
                initials:info.FirstName[0].toUpperCase()+info.LastName[0].toUpperCase()
                
            })
        }).then(()=>{
            dispatch({type:'Signup Success'})
        }).catch((err)=>{
            dispatch({type:'Signup err',err})
        })
    }
}