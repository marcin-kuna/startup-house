import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "50%",
    border: "2px solid black",
    borderRadius: 0,
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 20,
  },
  link: {
    textDecoration: "none",
    border: "2px solid black",
    borderRadius: 10,
    padding: "7px 12px",
    color: "black",
    margin: "0 10px 10px 0",
    fontWeight: 500,
  },
});

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface ISetPostId {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

export default function PostList({ setPostId }: ISetPostId) {
  const classes = useStyles();
  const emptyPost = {
    title: "",
  };

  const [data, setData] = useState<IPost[]>([]);

  useEffect(() => {
    async function getPosts(): Promise<any> {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }

    getPosts();
  }, []);

  return (
    <div>
      <Header post={emptyPost} />
      <ul>
        {data.map((post) => {
          return (
            <Card className={classes.root} key={post.id} component="li">
              <CardContent>
                <Typography className={classes.title} component="h1">
                  {post.title}
                </Typography>
                <Typography component="p">{post.body}</Typography>
              </CardContent>
              <CardActions>
                <Link
                  className={classes.link}
                  onClick={() => {
                    setPostId(post.id);
                  }}
                  to={`/posts/${post.id}`}
                >
                  Full Version
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
