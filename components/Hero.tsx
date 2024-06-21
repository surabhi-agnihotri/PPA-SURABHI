"use client";

import { useState } from 'react';
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import SignUpForm from './SignUpForm';

export function Hero() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    

    return (
        <>
            <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <div 
            style={{ paddingTop: '100px' }}
            className={`min-h-screen hero flex flex-col justify-center items-center gap-20 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-green">
                            Information you need during on-call emergencies
                        </h1>
                        <p className="text-slate-350 text-center mt-4">
                            Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.
                        </p>
                    </div>
                    {/* <button className={`mt-4 px-2 py-2 ${isDarkMode ? 'bg-red-400' : 'bg-gray-800'} text-white font-semibold rounded-md hover:bg-blue-600 ml-18`} onClick={toggleDarkMode}>
                        Toggle Dark Mode
                    </button> */}
                    <button className={`mt-4 px-4 py-2 ${isDarkMode ? 'bg-green-200' : 'bg-gray-800'} text-white font-semibold rounded-md hover:bg-blue-600 ml-18`}>
                        Get Started &gt;
                    </button>
                    <img src="images/hero1.jpg" alt="hero" />
                </div>
                
                <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-green">
                            Quick solutions, less stress
                        </h1>
                        <p className="text-slate-350 text-center mt-4">
                            Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.
                        </p>
                        
                    </div>
                </div>

                <div className="three-columns-container flex justify-center gap-10 mt-10">
                    <div className="column flex flex-col items-center text-center">
                        <img src="/images/1.jpg" alt="Symbol 1" className="mb-4 w-16 h-16" />
                        <h3 className="text-xl font-bold">Fix emergencies fast</h3>
                        <p className="text-slate-350 mt-2">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
                    </div>
                    <div className="column flex flex-col items-center text-center">
                        <img src="/images/2.jpg" alt="Symbol 2" className="mb-4 w-16 h-16" />
                        <h3 className="text-xl font-bold">Universally compatible</h3>
                        <p className="text-slate-350 mt-2">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
                    </div>
                    <div className="column flex flex-col items-center text-center">
                        <img src="/images/3.jpg" alt="Symbol 3" className="mb-4 w-16 h-16" />
                        <h3 className="text-xl font-bold">Secure for your org</h3>
                        <p className="text-slate-350 mt-2">We keep your data safe by taking top security measures.</p>
                    </div>
                </div>

                <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-green">
                            Instant setup, no custom code
                        </h1>
                        <p className="text-slate-350 text-center mt-4">
                            Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.
                        </p>
                    </div>
                    <img src="images/hero1.jpg" alt="hero" />
                </div>

                <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
                    <div>
                        <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold text-center text-green">
                            Get in touch
                        </h1>
                        <p className="text-slate-350 text-center mt-4">
                            Request a demo, or hop on a call.
                        </p>
                    </div>
                    <button className={`mt-4 px-4 py-2 ${isDarkMode ? 'bg-green-200' : 'bg-gray-800'} text-white font-semibold rounded-md hover:bg-blue-600 ml-18`}>
                        Get Started &gt;
                    </button>
                </div>
            </div>
            <Footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '1rem', marginTop: '20px', width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '1rem 0' }}>©Programming Pathshala</p>
                    <p style={{ margin: '1rem 0' }}>contact us | Terms of Service</p>
                </div>
            </Footer>
        </>
    );
}















