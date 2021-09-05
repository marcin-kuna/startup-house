import { useEffect, useState } from "react";
import Header from "./Header";

interface IPost {
  body?: string;
  id?: number;
  title: string;
  userId?: number;
}

export default function PostDetails({ postId }: any) {
  const post1 = {
    title: "details",
  };

  const [post, setPost] = useState<IPost>({ title: "" });
  async function getPost(): Promise<any> {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Header post={post} />
    </div>
  );
}
