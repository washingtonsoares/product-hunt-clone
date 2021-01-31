import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./modules/Posts";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}