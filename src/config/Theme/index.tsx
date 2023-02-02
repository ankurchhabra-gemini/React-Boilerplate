import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const Theme = (props: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrastText: '#fff',
      },
    },
    typography: {
      button: {
        fontFamily: 'Mulish',
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
