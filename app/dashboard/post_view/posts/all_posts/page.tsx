import SearchLink from "@/app/partial/search/SearchLink"


const AllpostsPage = () => {
  return (
    <div className="page-container grid grid-rows-[auto_1fr]">
      <div className="w-full">
        <SearchLink className="w-full" item={{ link:"/", text:"Search Posts" }}/>
      </div>
      <div className=""></div>

    </div>
  )
}

export default AllpostsPage