import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

const updateApiToken = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   else  delete axiosInstance.defaults.headers.common["Authorization"];
  
};

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const { getToken} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        updateApiToken(null);
        console.log("error in initAuth", error);
      }
      finally{
        setLoading(false)
      }
    };

    initAuth();
  }, [getToken]);


  if (loading) {
    return <div className="h-screen flex items-center justify-center w-full">
        <Loader className="size-8 animate-spin text-emerald-500 "/>
    </div>;
  }

  return <>
  {children}
  </>;
};

export default AuthProvider;
