import Navbar from "./components/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import axios from "axios"
import { axiosInstance } from "./lib/axios"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"

function App() {
  
// Here we not be using fetch instead of that we are going to use axios
// zustand it is the global state management solution
    const {authUser,checkAuth,isCheckingAuth} = useAuthStore()

    useEffect(()=>{
      checkAuth()
    },[checkAuth]);

    console.log({authUser}); 
    
    if(isCheckingAuth && !authUser)return(
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-pulse"/>
      </div>
    )
  return (
    <>
    <Navbar/>
    <Routes>
      {/* If User is authenticated then redirect to Home Page otherwise navigate to Login Page */}
      <Route path="/" element={authUser ? <HomePage/>:<Navigate to="/login"/>}/>
      <Route path="/signup" element={!authUser?<SignUpPage/>:<Navigate to="/"/>}/>
      <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
      <Route path="/profile" element={authUser ? <ProfilePage/>:<navigate to="/login"/>}/>

    </Routes>

    <Toaster/>
    </> 
  )
}

export default App
