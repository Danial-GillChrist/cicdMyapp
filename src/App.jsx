import { useEffect, useState } from 'react'
import './App.css'
// import Greeting  from './utils/add'

function App() {

  const [user, helloUser] = useState([]);

  const api = "https://dummyjson.com/users";

   async function fetchData () {
        try{
            let res = await fetch(api);
            if(!res.ok){
               throw new Error("NO data found");
            }

            let data = await res.json();
            helloUser(data.users);
            console.log(data.users);
        }
        catch(error){
           console.log(error)
        }
    }

    
    useEffect(()=>{
      fetchData()
    },[]);


  return (
    <>
       <h1>Teting User</h1>
       {
        user?.map((item)=>{
          let {firstName, lastName, id} = item;
          return(
               <div className='user' key={id}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
               </div>
          )
        })
       }
    </>
  )
}

export default App
