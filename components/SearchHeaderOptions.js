import SearchHeaderOption from "./SearchHeaderOption"
import { MagnifyingGlassIcon,PhotoIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
const SearchHeaderOptions = () => {
    const router = useRouter();
  return (
    <div className="flex space-x-8 w-full justify-center lg:justify-start text-sm text-gray-700 lg:pl-52 border-b">
        <SearchHeaderOption title="All" Icon={MagnifyingGlassIcon} selected={router.query.searchType==="" || !router.query.searchType} />
        <SearchHeaderOption title="Images" Icon={PhotoIcon} selected={router.query.searchType==="image"} />
    </div>
  )
}
export default SearchHeaderOptions
