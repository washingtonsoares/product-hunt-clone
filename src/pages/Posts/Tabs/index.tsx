import * as Styled from './styled';

export default function Tabs() {
  return (
    <Styled.Tabs data-testid="tabs">
      <Styled.TabItem to="/" exact>
        Popular
      </Styled.TabItem>
      <Styled.TabItem to="/newest" exact>
        Newest
      </Styled.TabItem>
    </Styled.Tabs>
  )
}
