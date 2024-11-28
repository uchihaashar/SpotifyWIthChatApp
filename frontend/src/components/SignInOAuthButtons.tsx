import { useSignIn } from "@clerk/clerk-react"
import { Button } from "./ui/button";


const SIgnInOAuthButtons = () => {

    const {signIn, isLoaded}=  useSignIn()

    if(!isLoaded) return null;



const SignInWithGoogle = ()=>{
    signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl:"/sso-callback",
        redirectUrlComplete:"/auth-callback"
    })
}

  return (
  <Button  onClick={SignInWithGoogle} variant={"secondary"} className="w-full text-white border-zinc-200 h-11">
    continue with google
  </Button>
  )
}

export default SIgnInOAuthButtons