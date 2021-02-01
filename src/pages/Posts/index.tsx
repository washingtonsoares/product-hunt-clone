import { Route, Switch } from 'react-router-dom';
import Tabs from './Tabs';
import * as Styled from './styled';
import PostsList from './List';
import Header from './Header';

export default function Posts() {
  return (
    <Styled.Posts>
      <Header />
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
