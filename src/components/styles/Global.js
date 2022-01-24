import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        direction: rtl;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.font};
        font-family: Secular One, sans-serif;
        font-size: 1.7rem;
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
`

export default GlobalStyles;
