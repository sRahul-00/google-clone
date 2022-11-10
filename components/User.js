import { useSession,signIn,signOut } from "next-auth/react"

const User = () => {
  const {data: session} = useSession();
  console.log(session);
  if(session){
    return (
      <>
          <img onClick={signOut} 
            src={session.user.image} 
            alt="user-img" 
            className="h-11 w-11 rounded-full hover:bg-gray-200 cursor-pointer p-1" 
          />
      </>
    )
  }
  return (
    <>
      <button onClick={signIn}
      className="bg-blue-500 text-white font-medium px-5 py-2 rounded-md hover:brightness-105 hover:shadow-md"
      >
        Sign In
      </button>
    </>
  )
}
export default User