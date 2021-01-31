import 'styled-components';
import { ThemeScheme } from './core/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeScheme { }
}
