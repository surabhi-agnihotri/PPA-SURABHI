// App.jsx or App.js

import React, { useState } from 'react';
import { Navigation } from './Navigation'; // Adjust the path based on your project structure
import { Hero } from './Hero'; // Adjust the path based on your project structure
import './styles.css'; // Import your global styles file

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            <header className="flex justify-end items-center py-4 px-8">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={toggleDarkMode}>
                    Toggle Dark Mode
                </button>
            </header>
            <Navigation isDarkMode={isDarkMode} />
            <Hero isDarkMode={isDarkMode} />
            {/* Other components */}
        </div>
    );
}

export default App;
