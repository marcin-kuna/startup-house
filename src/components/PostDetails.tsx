import { useEffect, useState } from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  post: {
    padding: "0 20px",
    marginBottom: 80,
    minWidth: 280,
    maxWidth: "50%",
  },
  title: {
    fontSize: 32,
    lineHeight: 1.1,
  },
  comments: {
    padding: "0 20px",
    minWidth: 280,
    maxWidth: "50%",
  },
  list: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    listStyleType: "none",
  },
});

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
  const classes = useStyles();
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
      <section className={classes.post}>
        <h1 className={classes.title}>{post.title}</h1>
        <p>{post.body}</p>
      </section>
      <section className={classes.comments}>
        <h2>Comments</h2>
        <ul className={classes.list}>
          {comments.map((comment) => {
            return (
              <li key={comment.id} className={classes.listItem}>
                <h3>{comment.email}</h3>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
