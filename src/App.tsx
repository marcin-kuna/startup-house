import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <PostList setPostId={setPostId} />}
          />
          <Route
            exact
            path={`/posts/${postId}`}
            component={() => <PostDetails postId={postId} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
