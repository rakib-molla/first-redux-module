const Logger = (state) =>(next)=> (action)=>{
    console.log('previous state',state)
    console.log('action',next(action));
    console.log('next ',state)
};

export default Logger;