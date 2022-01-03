import React from 'react';
import {MainContentContainer} from "../../components/main-content/main-content.styles";
import {
    HomepageButton,
    HomepageButtonFirstRow,
    HomepageButtonsContainer,
    HomepageButtonSecondRow,
    HomepageButtonsRow,
    HomepageButtonTitle,
    HomepageInput,
    MobileApp,
    MobileAppContainer,
    MobileAppExchangeButton,
    MobileAppExportButton,
    MobileAppInput,
    MobileAppLogoContainer,
    MobileAppPointCountBubble,
    MobileAppText,
    VerticalSeparator
} from "./homepage.styles";

const HomePage = () => (
    <MainContentContainer>
        <HomepageButtonsContainer>
            <HomepageButtonsRow>
                <HomepageButtonFirstRow>
                    <HomepageButtonTitle>Change point value</HomepageButtonTitle>
                    <HomepageInput type={'number'}/>
                </HomepageButtonFirstRow>
                <HomepageButtonFirstRow>
                    <HomepageButtonTitle>App Background</HomepageButtonTitle>
                    <HomepageButton>Change</HomepageButton>
                </HomepageButtonFirstRow>
            </HomepageButtonsRow>
            <HomepageButtonsRow>
                <HomepageButtonSecondRow>
                    <HomepageButtonTitle>Call to action</HomepageButtonTitle>
                    <HomepageInput type={'text'}/>
                </HomepageButtonSecondRow>
                <HomepageButtonSecondRow>
                    <HomepageButtonTitle>Change hero image</HomepageButtonTitle>
                    <HomepageButton>Change</HomepageButton>
                </HomepageButtonSecondRow>
            </HomepageButtonsRow>
        </HomepageButtonsContainer>
        <MobileAppContainer>
            <MobileApp>
                <MobileAppLogoContainer>
                    <img alt="mobile-app-logo" src="assets/images/demo_logo.png" height={80} width={80}/>
                </MobileAppLogoContainer>
                <MobileAppText>Put you code here</MobileAppText>
                <MobileAppInput type={'text'}/>
                <VerticalSeparator height={'1rem'}/>
                <img alt="hero-image" className="hero-image" src="assets/images/qr_code_placeholder.png"/>
                <MobileAppPointCountBubble>24</MobileAppPointCountBubble>
                <img alt="among-us-avatar" src="assets/images/among_us_avatar.png"/>
                <MobileAppText>Your Points</MobileAppText>
                <MobileAppExportButton>Export</MobileAppExportButton>
                <MobileAppExchangeButton>
                    <img alt="qr_code_scanner" src="assets/images/exchange_rectangle.png"/>
                    <MobileAppText>Exchange</MobileAppText>
                </MobileAppExchangeButton>
            </MobileApp>
        </MobileAppContainer>
    </MainContentContainer>
)

export default HomePage;