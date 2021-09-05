import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles({
  root: {
    border: "1px solid black",
    height: 80,
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
  },
});

interface IPost {
  post: {
    body?: string;
    id?: number;
    title: string;
    userId?: number;
  };
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export default function Header({ post }: IPost) {
  const classes = useStyles();
  console.log(post);

  return (
    <header className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="textPrimary" href="/" onClick={handleClick}>
          Posts
        </Link>
        {post.title ? <Typography>{post.title}</Typography> : null}
      </Breadcrumbs>
    </header>
  );
}
