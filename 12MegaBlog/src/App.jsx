import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login , logout } from "./store/authSlice"
import { Footer, Header } from "./components"

function App() {

  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch({userData})

      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (
      <div className="m-h-screen flex flex-wrap content-between bg-gray-500">
        <div className="w-full block">
          
            <Header/>
               <main>
                todo{/* {outlet} */}
               </main>
            <Footer/>
        </div>
      </div>
  ) : null
}

export default App
