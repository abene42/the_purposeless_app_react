import styled from 'styled-components';
import {css} from 'styled-components';

export const HomepageButtonsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
`;

export const HomepageButtonsRow = styled.div`
    height: 180px;
    margin: 25px 0;
    display: flex;
    align-content: center;
    justify-content: center;
`;

const homepageButtonCommonCss = css`
    background-color: #fefefe;
    width: 320px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 25px;
`

export const HomepageButtonFirstRow = styled.div`  
    ${homepageButtonCommonCss}
    &:nth-child(1){
         border-radius: 0 38px;
    }
    &:nth-child(2){
         border-radius: 36px 0 38px;
    }
`;

export const HomepageButtonSecondRow = styled.div`    
    ${homepageButtonCommonCss};
    &:nth-child(1){
         border-radius: 36px 0 38px;
    }
    &:nth-child(2){
         border-radius: 0 38px;
    }
`;

export const HomepageButtonTitle = styled.p`
    font-size: 22px;
    margin-bottom: 1rem;
`;

const inputAndButtonCommonCss = css`
    border: none;
    background-color: #e8e8e8;
    width: 120px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomepageInput = styled.input`
    ${inputAndButtonCommonCss};
    outline: none;
    padding: 0 1.4rem;
`;

export const HomepageButton = styled.button`
    ${inputAndButtonCommonCss};
`;

export const MobileAppContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MobileApp = styled.div`
    background-image: url("assets/images/background_image.png");
    background-color: #727272;
    width: 80%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MobileAppLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const MobileAppText = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 900;
    margin: 0.5rem 0;
`;

export const MobileAppPointCountBubble = styled.div`
    width: 1.8rem;
    height: 1.8rem;
    background-color: white;
    color: rgba(236, 7, 37, 1);
    font-size: 13px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: -1.6rem;
    margin-left: 3.5rem;
`;

export const MobileAppInput = styled.input`
    width: 150px;
    height: 50px;
    background: linear-gradient(180deg, #EC0926 0%, #E60320 100%);;
    border: none;
    outline: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MobileAppExportButton = styled.button`
    width: 190px;
    height: 60px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    background: linear-gradient(97.08deg, #FF1F3B -1.46%, #B00017 101.34%);
    box-shadow: inset -0.682814px -2.38985px 2.73126px #B30119, inset 2.73126px 3.41407px 2.73126px #E62942;
    margin: 2.5rem 0;
    border: none;
`;

export const MobileAppExchangeButton = styled.div`
    position: absolute;
    left: 10px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const VerticalSeparator = styled.div`
    ${(props)=> {
    return props.height ? css`height: ${props.height};` : css`height: 2px;` 
    }};
`;