import { useState} from "react";
import usePosts from "./hooks/usePosts";

function PostList() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
    // const [userId, setUserId] = useState<number>()
    const { data, error, isLoading } = usePosts( {page, pageSize});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {/* <select className="form-select mb-3" value={userId} onChange={(evt)=> setUserId(parseInt(evt.target.value))}>
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {data?.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <button disabled={ page === 1} className="btn btn-primary my-3" onClick={ ()=> setPage(page-1)}>Prev</button>
      <button className="btn btn-primary my-3 ms-2" onClick={ ()=> setPage(page+1)}>Next</button>
    </>
  );
}

export default PostList;
