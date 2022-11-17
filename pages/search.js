import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import Response from "../Response";

const search = ({results}) => {
  console.log(results);
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

export async function getServerSideProps(context){
  const mockData = true;
  const data =  mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
  ).then((response)=>{
    // console.log(response);
    return response.json();
  });

  return {
    props: {
      results: data,
    }
  }

}