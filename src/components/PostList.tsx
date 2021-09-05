import { Link } from "@material-ui/core";
import { useState, useEffect } from "react";
import Header from "./Header";

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function PostList({ setPostId }: any) {
  const emptyPost = {
    title: "",
  };

  const [data, setData] = useState<IPost[]>([]);
  async function getPosts(): Promise<any> {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  const setId = (id: number): any => {
    setPostId(id);
    console.log(id);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(data);

  return (
    <div>
      <Header post={emptyPost} />
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href="/details" onClick={() => setId(post.id)}>
              Full Version
            </Link>
          </div>
        );
      })}
    </div>
  );
}
