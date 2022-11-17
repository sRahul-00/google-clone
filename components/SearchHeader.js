import Image from "next/image"
import {MicrophoneIcon, MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/20/solid"
import User from "./User"
import { useRouter } from "next/router"
import { useRef } from "react"
import SearchHeaderOptions from "./SearchHeaderOptions"
const SearchHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;
      if(!term.trim())
        return;

      router.push(`/search?term=${term.trim()}&searchType=`);
    }

  return (
    <header className="sticky bg-white top-0">
        <div className="flex items-center p-6 w-full"> 
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
          width="120"
          height="40"
          className="cursor-pointer"
          onClick={()=>router.push('/')}
          alt="google-logo"
        />

        <form className="flex border border-gray-200 rounded-full flex-grow px-6 py-2 shadow-lg ml-10 mr-5 max-w-3xl items-center">
            <input type="text" 
                defaultValue={router.query.term}
                ref={searchInputRef}
                className="w-full focus:outline-none"
            />
            <XMarkIcon onClick={()=>searchInputRef.current.value = ""} className="h-7 text-gray-500 ml-2 cursor-pointer sm:mr-3" />
            <MicrophoneIcon className="h-6 hidden sm:inline-flex cursor-pointer text-blue-500 border-l-2 pl-3 border-l-gray-300 mr-3" />
            <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex cursor-pointer text-blue-500" />
            <button onClick={search} hidden></button>
        </form>
         <User className="ml-auto whitespace-nowrap" />
        </div>
        <SearchHeaderOptions />
    </header>
  )
}
export default SearchHeader