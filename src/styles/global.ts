import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';


type GlobalThemeProps = {
 theme: ThemeProps;
};
const globalStyle = createGlobalStyle`
    :root {
    //dark-mode
    --light-background: #191919;
    --light-primary: #9ba1ac
    --light-secondary: #0520d6
    --light-tertiary: #159740
    --light-text: #f7f7f7;
    
    //light-mode
    --light-background: #f7f7f7;
    --light-primary: #9ba1ac
    --light-secondary: #0520d6
    --light-tertiary: #159740
    --light-text: #191919;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    }
    body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    }
    h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    }`;
export default withTheme(globalStyle);