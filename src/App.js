import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.page";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import GenerateCodePage from "./pages/generate-code/generate-code.page";
import CheckCodesPage from "./pages/check-code/check-code.page";

function App() {
    return (
        <main>
            <NavigationBar/>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
                <Route exact path={'/generate'} element={<GenerateCodePage/>}/>
                <Route exact path={'/check'} element={<CheckCodesPage/>}/>
            </Routes>
        </main>
    );
}

export default App;
