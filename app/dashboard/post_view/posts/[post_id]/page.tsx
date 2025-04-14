'use client'
import { useParams } from "next/navigation"

const EditPostPage = () => {
  const {post_id} = useParams()
  console.log(post_id)
  const numberPost_id:number = Number(post_id)
  return (
    <div className="page-container">
      <div className="">
      </div>
      <div className="">
        EditPost with id: {numberPost_id * 4}
      </div>
    </div>
  )
}

export default EditPostPage