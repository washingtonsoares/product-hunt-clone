import 'styled-components';
import { ThemeScheme } from './core/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeScheme { }
}
