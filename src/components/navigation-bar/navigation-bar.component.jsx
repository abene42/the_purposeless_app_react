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

const NavigationBar = () => (
    <NavigationBarContainer>
        <LogoContainer>
            <Logo/>
        </LogoContainer>
        <HomeButton to={'/'}>Home</HomeButton>
        <NavigationLinksContainer>
            <NavigationLinkTitle>Special Codes</NavigationLinkTitle>
            <NavigationLink to={'generate'}>Generate Random Code</NavigationLink>
            <NavigationLink to={'check'}>Check Codes</NavigationLink>
        </NavigationLinksContainer>
        <BlurredText>The Purposeless App</BlurredText>
    </NavigationBarContainer>
)

export default NavigationBar;