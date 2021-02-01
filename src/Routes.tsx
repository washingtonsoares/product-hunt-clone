import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/post/:postId">
          <PostDetails />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}