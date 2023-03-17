export interface ThemeProps {
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
}
export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',    
    primary:'var(--dark-primary)',
    secondary:'var(--darksecondary)',
    tertiary:'var(--dark-tertiary)',
    text:'var(--dark-text)',
}

export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    primary:'var(--light-primary)',
    secondary:'var(--light-secondary)',
    tertiary:'var(--light-tertiary)',  
    text:'var(--light-text)',
}
    