import Head from "next/head"
import SearchHeader from "../components/SearchHeader"

const search = () => {
  return (
    <div>
        <Head>
            <title>Search Title</title>
        </Head>

        {/* search-header */}
        <SearchHeader />
    </div>
  )
}
export default search