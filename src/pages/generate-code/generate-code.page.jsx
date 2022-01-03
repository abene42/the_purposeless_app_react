import React from 'react';
import {MainContentContainer} from "../../components/main-content/main-content.styles";
import './generate-code.styles.css';

const GenerateCodePage = () => (
    <div className='right-content'>
        <div className="random-codes-container">
            <div className="random-codes-div">
                <div className="random-codes-row">
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                </div>
                <div className="random-codes-row">
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                </div>
                <div className="random-codes-row">
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                </div>
                <div className="random-codes-row">
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                    <span className="random-code">AFIAOE</span>
                </div>
            </div>
            <div className="random-codes-button-div">
                <div className="number-of-codes">
                    <input type="number"/>
                    <p>codes</p>
                </div>
                <button className="generate-codes-button">Generate new code</button>
            </div>
        </div>
    </div>
)

export default GenerateCodePage;