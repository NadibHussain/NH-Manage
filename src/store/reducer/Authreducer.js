const initState={
    autherr:null
}
const Authreducer =(state=initState,action) =>
{   
    switch(action.type)
    {   
        
        case 'Login Failed':
        return {
            ...state,autherr:action
        }
        case 'loginSuccess':
        console.log('success')
        return {
            ...state,autherr:null
        }
        case 'Signout Success':
        console.log('Signout success')
        return {
            ...state,autherr:null
        }
        case 'Signup Success':
       
        return {
            ...state,autherr:null
        }
        case 'Signup err': 
        console.log(action.err.message)
        return {
            ...state,autherr:action.err.message
        }
        default:
        return {
            ...state,autherr:null
        }
    }
    
};
export default Authreducer