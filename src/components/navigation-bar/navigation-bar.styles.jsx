import styled, {css} from 'styled-components';
import {Link, useLocation} from "react-router-dom";

export const NavigationBarContainer = styled.div`
    background-color: #ffffff;
    width: 20vw;
    height: 100%;
    position: relative;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    background-image: url("assets/images/demo_logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
`;

const linkButtonsCommonCss = css`
    ${ (props) => props.isActive ? css`background-color: #2A5F83; color: #FEFEFE;` : css`color: #242424;`};
    cursor:hand;
    &:hover{
      background-color: #6A98B8;
      color: white;
    }
`

export const HomeButton = styled(Link)`
    ${linkButtonsCommonCss};
    display: block;
    text-decoration: none;
    padding: 20px 160px 20px 30px;
    font-size: 33px;
    font-weight: 500;
`;

export const NavigationLinksContainer = styled.div`
    margin-top: 100px;
`;

export const NavigationLinkTitle = styled.div`
    color: #7D6201;
    font-size: 28px;
`;

export const NavigationLink = styled(Link)`
    ${linkButtonsCommonCss};
    display: block;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    padding: 17px 0 17px 29px;
`;

export const BlurredText = styled.div`
    position: absolute;
    bottom: 50px;
    margin-left: 3rem;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    /*width: 100px;*/
    /*height: 100px;*/
    background-color: #ccc;
    //padding-left: 2rem;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
`