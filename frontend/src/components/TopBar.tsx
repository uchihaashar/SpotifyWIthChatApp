import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";




const TopBar = () => {
    const isAdmin = false;
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900/75 top-0 sticky 
    backdrop-blur-md z-19
    ">

        <div className="flex gap-2 items-center">
       spotify  
        </div>
        <div className="flex gap-4 items-center">
     {isAdmin &&  (
        <Link to={'/admin'}>
            <LayoutDashboard className="size-4 mr-2"/>
            admin deshboard
        </Link>
     )}
   
      <SignedIn>
        <SignOutButton/>
      </SignedIn>

    <SignedOut>
     <SignInOAuthButtons/>
    </SignedOut>


        </div>
    </div>
  )
}

export default TopBar