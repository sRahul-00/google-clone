import { useRouter } from "next/router"

const SearchHeaderOption = ({title, Icon, selected}) => {
    const router = useRouter();
    const selectTab = (title) =>{
        router.push(`/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`)
    }
  return (
    <div onClick={()=>selectTab(title)} className={`flex items-center space-x-1 border-b-4 border-b-transparent cursor-pointer pb-3 hover:text-blue-500 hover:border-b-blue-500 ${selected && "text-blue-500 border-b-blue-500"}`}>
        <Icon className="h-4" />
        <p>{title}</p>
    </div>
  )
}
export default SearchHeaderOption