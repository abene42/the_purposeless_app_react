import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.page";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";

function App() {
    return (
        <main>
            <NavigationBar/>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
            </Routes>
        </main>
    );
}

export default App;
