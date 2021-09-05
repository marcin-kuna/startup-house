import { useEffect, useState } from "react";
import Header from "./Header";

interface IPost {
  body?: string;
  title: string;
}

interface IComment {
  email: string;
  body: string;
  id: number;
}

export default function PostDetails({ postId }: any) {
  const [post, setPost] = useState<IPost>({ title: "" });
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    async function getPost(): Promise<any> {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((err) => console.log(err));
    }

    async function getComments(): Promise<any> {
      await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((err) => console.log(err));
    }

    getPost();
    getComments();
  }, [postId]);

  return (
    <div>
      <Header post={post} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>{comment.email}</h2>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
