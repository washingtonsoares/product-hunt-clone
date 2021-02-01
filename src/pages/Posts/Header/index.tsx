import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs';

dayjs.extend(advancedFormat);

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Avatar src="https://avatars.githubusercontent.com/u/5726140?s=200" />
      <Styled.DateText>
        Today, {dayjs().format('Do MMM')}
      </Styled.DateText>
      <Styled.Icon icon={faSearch} />
    </Styled.Header>
  );
}