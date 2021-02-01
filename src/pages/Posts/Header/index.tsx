import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs';

dayjs.extend(advancedFormat);

export default function Header() {
  return (
    <Styled.Header data-testid="header">
      <Styled.Avatar
        src="https://avatars.githubusercontent.com/u/5726140?s=200"
        alt="My avatar"
      />
      <Styled.DateText>
        Today, {dayjs().format('Do MMM')}
      </Styled.DateText>
      <Styled.Icon icon={faSearch} title="What are you looking for?" />
    </Styled.Header>
  );
}
