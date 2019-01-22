export const createproject=(project) =>{
    return (dispatchs,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore();
        const profile=getState().firebase.profile;
        const id=getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authfirstname:profile.firstname,
            authlastname:profile.lastname,
            authID:id,
            time:new Date()

        }).then(()=>{
            dispatchs({type:'Create Project' ,project})
        }).catch((err)=>{
            dispatchs({type:'Create Project err' ,err})
        })
        
        
    }
} ;