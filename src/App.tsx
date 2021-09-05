import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

// interface IPost {
//   body: string;
//   id: number;
//   title: string;
//   userId: number;
// }

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
            path="/details"
            component={() => <PostDetails postId={postId} />}
          />
          {/* <PostList setPostId={setPostId} />
          <PostDetails /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
