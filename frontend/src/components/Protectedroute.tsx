import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Protectedroute = ({Component}:{Component:any}) => {

  const navigate = useNavigate()


  useEffect (()=>{

    const userinfo =  async()=>{

    try{

         await axios.get('http://localhost:4000/api/authuser')


    }catch(error:any){

      if(error?.response.data.message){

        navigate('/login')
      }
    }

    
    }

    userinfo()


  },[])
 
 
  return (
    <div>

      <Component />
    </div>
  )
}

export default Protectedroute