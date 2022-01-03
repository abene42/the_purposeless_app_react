import React from 'react';
import {
    BlurredText,
    HomeButton,
    Logo,
    LogoContainer,
    NavigationBarContainer,
    NavigationLink,
    NavigationLinksContainer,
    NavigationLinkTitle
} from "./navigation-bar.styles";
import {useLocation} from "react-router-dom";

const NavigationBar = () => {
    const location = useLocation();

    return(
        <NavigationBarContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <HomeButton to={'/'} isActive={location.pathname === '/'}>Home</HomeButton>
            <NavigationLinksContainer>
                <NavigationLinkTitle>Special Codes</NavigationLinkTitle>
                <NavigationLink to={'generate'} isActive={location.pathname === '/generate'}>Generate Random Code</NavigationLink>
                <NavigationLink to={'check'} isActive={location.pathname === '/check'}>Check Codes</NavigationLink>
            </NavigationLinksContainer>
            <BlurredText>The Purposeless App</BlurredText>
        </NavigationBarContainer>
    )
}

export default NavigationBar;