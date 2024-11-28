import { Card, CardContent } from "@/components/ui/card"
import { axiosInstance } from "@/lib/axios"
import { useUser } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const AuthCallBack = () => {
  const {isLoaded,user}=useUser()
  const navigate = useNavigate();

  useEffect(()=>{
const syncUser= async ()=>{
try {
  if(!isLoaded || !user) return;
  await axiosInstance.post("/auth/callback",{
    id:user.id,
    firstName:user.firstName,
    lastName:user.lastName,
    imageUrl:user.imageUrl
  })
} catch (error) {
  console.log("error in auth callback", error)
}
finally{
  navigate("/",)
} 
}
syncUser()
  },[isLoaded,user,navigate]) 

  return (
<div className="h-screen flex items-center justify-center bg-black w-full  ">
<Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800" >
  <CardContent className="flex flex-col gap-4 pt-6 items-center">
<Loader className="size-6 text-emerald-500 animate-spin"/>
<h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
<p className="text-zinc-400 text-sm">Redirecting...</p>
  </CardContent>
</Card>
</div>  )
}

export default AuthCallBack