import * as Styled from './styled';

export default function Tabs() {
  return (
    <Styled.Tabs>
      <Styled.TabItem to="/" exact>
        Popular
      </Styled.TabItem>
      <Styled.TabItem to="/newest" exact>
        Newest
      </Styled.TabItem>
    </Styled.Tabs>
  )
}