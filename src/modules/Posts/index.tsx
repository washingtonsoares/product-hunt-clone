import { Route, Switch } from "react-router-dom";
import Tabs from "./Tabs";
import * as Styled from './styled';
import PostsList from './PostList';

export default function Posts() {
  return (
    <Styled.Posts>
      <Tabs />
      <Switch>
        <Route path="/newest" exact>
          <PostsList order="NEWEST" />
        </Route>
        <Route path="/">
          <PostsList order="VOTES" />
        </Route>
      </Switch>
    </Styled.Posts>
  )
}