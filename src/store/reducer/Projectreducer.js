const initState={
    
};

const Projectreducer =(state=initState,action) =>
{
   switch(action.type)
   {
    case "Create Project" : console.log(action.project)
         return state
    case "Create Project err" : console.log(action.err)
         return state
    default:
        return state
   }
   
};
export default Projectreducer