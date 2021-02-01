import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}