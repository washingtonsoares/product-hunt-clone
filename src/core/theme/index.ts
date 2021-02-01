export const theme = {
  primary: '#d9552e',
  darkGrey: '#72838b',
  whiteSmoke: '#eff1f3',
  regentGray: '#85949b',
  ebonyGray: '#232C37',
  ironGray: '#E2E5E7',
  porcelain: '#f4f5f6'
} as const;

export type ThemeScheme = typeof theme;
