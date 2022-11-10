import Header from "../../components/Header"
import {getProviders, signIn} from "next-auth/react";

// client-side
const signin = ({providers}) => {
    // console.log(providers);
  return (
    <di>
      <Header />
      <div className="my-40">
        {Object.values(providers).map((provider) =>{
            // console.log(provider);
            return (
            <div key={provider.name} className="flex flex-col items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
                alt="google-logo" 
                className="w-60 object-cover"
                />
                <p className="text-sm italic my-10 text-center">This is just learning purposes.</p>
                <button 
                className="bg-red-400 text-white p-3 rounded-lg hover:bg-red-500"
                onClick={()=>signIn(provider.id, {callbackUrl: '/'})}>Sign in with {provider.name}</button>
            </div>
            )
        })}
      </div>
    </di>
  )
}
export default signin

// server-side
export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {providers},
    }
}