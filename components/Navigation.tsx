// import Link from"next/link"
// import { Avatar } from "@radix-ui/react-avatar";
// import { AvatarFallback } from "@radix-ui/react-avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
// const navList=[
//     {
//         title:"Docs",
//         href:"/docs",
//     },
//     {
//         title:"Pricing",
//         href:"/Pricing",
//     },
//     {
//         title:"Status",
//         href:"/status",
//     },
//     {
//         title:"FAQs",
//         href:"/faqs",
//     },
//     {
//         title:"Contact Us",
//         href:"/contact",
//     },
//     {
//         title:"Login",
//         href:"/login",
//     },
//     {
//         title:"Sign Up",
//         href:"/signup",
//     },
// ]



// export function Navigation(){
//     return (
//     <nav className="fixed w-screen px-4 top-2 z-50">
//         <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
//      <p>Programming Paathshaala</p>
//      <ul className="flex items-center gap-4">
//         {navList.map((nav)=>{
//             return (
//                 <li key={nav.title}>
//                     <Link className="text-muted-foreground hover:text-primary hover:underline" href={nav.href}>{nav.title}</Link>
//                 </li>
//             );
//         })}
//      </ul>
      
//       <div>
//         <Avatar>
//         <AvatarImage src="" />
//         <AvatarFallback>o</AvatarFallback>
//         </Avatar>

        
//      </div>
//      </div>
//     </nav>
//     );
// }



// "use client";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

// const navList = [
//   { title: "Docs", href: "/docs" },
//   { title: "Pricing", href: "/Pricing" },
//   { title: "Status", href: "/status" },
//   { title: "FAQs", href: "/faqs" },
//   { title: "Contact Us", href: "/contact" },
// ];

// const authList = [
//   { title: "Login", href: "/login" },
//   { title: "Sign Up", href: "/signup" },
// ];




// // Navigation.jsx

// import React from 'react';
// import { useState } from "react";

// export function Navigation() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   return (
//     <nav 
//     className="fixed w-screen px-4 top-2 z-50">
//       <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
//         <div className="flex items-center">
//           {/* Logo and Text */}
//           <div className="flex items-center gap-2">
//             <Avatar>
//               <AvatarImage height="24px" width="24px" src="/images/logopp.jpg" alt="Logo" />
//               <AvatarFallback></AvatarFallback>
//             </Avatar>
//             <p>Programming Paathshaala</p>
//             {/* <button className="mt-4 px-4 py-2 bg-green-200 text-white font-semibold rounded-md hover:bg-blue-600 mt-1800">
//                         Get Started &gt;
//                     </button> */}
//           </div>
//         </div>
//         <ul className="flex items-center gap-4">
//           {navList.map((nav) => (
//             <li key={nav.title}>
//               <Link
//                 className="text-muted-foreground hover:text-primary hover:underline"
//                 href={nav.href}
//               >
//                 {nav.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-4">
//           {authList.map((auth) => (
//             <Link
//               key={auth.title}
//               className="text-muted-foreground hover:text-primary hover:underline"
//               href={auth.href}
//             >
//               {auth.title}
              
//             </Link>
//           ))}
//           <button onClick={toggleTheme} className="px-4 py-2 rounded-md border">
//             Toggle Theme
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }













// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

// import SignUpForm from './SignUpForm';


// const navList = [
//   { title: 'Docs', href: '/docs' },
//   { title: 'Pricing', href: '/pricing' },
//   { title: 'Status', href: '/status' },
//   { title: 'FAQs', href: '/faqs' },
//   { title: 'Contact Us', href: '/contact' },
// ];

// const authList = [
//   { title: 'Login', href: '/login' },
//   { title: 'Sign Up', href: '/signup' },
// ];

// export function Navigation() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <nav className={`fixed w-screen px-4 top-2 z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
//       <div className="py-3 container flex items-center justify-between rounded-md z-50">
//         <div className="flex items-center">
//           {/* Logo and Text */}
//           <div className="flex items-center gap-2">
//             <Avatar>
//               <AvatarImage height="24px" width="24px" src="/images/logopp.jpg" alt="Logo" />
//               <AvatarFallback />
//             </Avatar>
//             <p>Programming Paathshaala</p>
//           </div>
//         </div>
//         <ul className="flex items-center gap-4">
//           {navList.map((nav) => (
//             <li key={nav.title}>
//               <Link className="hover:underline" href={nav.href}>
//                 {nav.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-4">
//           {authList.map((auth) => (
//             <Link key={auth.title} className="hover:underline" href={auth.href}>
//               {auth.title}
//             </Link>
//           ))}
//           <button onClick={toggleTheme} className="px-4 py-2 rounded-md border">
//             Toggle Theme
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }





/// components/Navigation.jsx













// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
// import SignUpForm from './SignUpForm'; // Adjust the path as needed

// const navList = [
//   { title: 'Docs', href: '/docs' },
//   { title: 'Pricing', href: '/pricing' },
//   { title: 'Status', href: '/status' },
//   { title: 'FAQs', href: '/faqs' },
//   { title: 'Contact Us', href: '/contact' },
// ];

// const authList = [
//   { title: 'Login', href: '/login' },
//   { title: 'Sign Up', href: '#' }, // Set href to '#' as it will open the modal
// ];

// export function Navigation({ isDarkMode, toggleDarkMode }) {
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false);

//   const openSignUp = () => {
//     setIsSignUpOpen(true);
//   };

//   const closeSignUp = () => {
//     setIsSignUpOpen(false);
//   };

//   return (
//     <nav className={`fixed w-screen px-4 top-2 z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
//       <div className="py-3 container flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="flex items-center gap-2">
//             <Avatar>
//               <AvatarImage height="24px" width="24px" src="/images/logopp.jpg" alt="Logo" />
//               <AvatarFallback />
//             </Avatar>
//             <p>Programming Paathshaala</p>
//           </div>
//         </div>
//         <ul className="flex items-center gap-4">
//           {navList.map((nav) => (
//             <li key={nav.title}>
//               <Link className="hover:underline" href={nav.href}>
//                 {nav.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-4">
//           {authList.map((auth) => (
//             <button
//               key={auth.title}
//               className="hover:underline"
//               onClick={auth.title === 'Sign Up' ? openSignUp : null}
//             >
//               {auth.title}
//             </button>
//           ))}
//           <button onClick={toggleDarkMode} className="px-4 py-2 rounded-md border">
//             Toggle Theme
//           </button>
//         </div>
//       </div>
//       {isSignUpOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <SignUpForm onSuccess={closeSignUp} />
//             <button onClick={closeSignUp} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navigation;









// components/Navigation.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import SignUpForm from './SignUpForm'; // Adjust the path as needed

const navList = [
  { title: 'Docs', href: '/docs' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Status', href: '/status' },
  { title: 'FAQs', href: '/faqs' },
  { title: 'Contact Us', href: '/contact' },
];

const authList = [
  { title: 'Login', href: '/login' },
  { title: 'Sign Up', href: '#' }, // Set href to '#' as it will open the modal
];

export function Navigation({ isDarkMode, toggleDarkMode }) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <nav className={`fixed w-screen px-4 top-2 z-50 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="py-3 container flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage height="24px" width="24px" src="/images/logopp.jpg" alt="Logo" />
              <AvatarFallback />
            </Avatar>
            <p>Programming Paathshaala</p>
          </div>
        </div>
        <ul className="flex items-center gap-4">
          {navList.map((nav) => (
            <li key={nav.title}>
              <Link className="hover:underline" href={nav.href}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {authList.map((auth) => (
            <button
              key={auth.title}
              className="hover:underline"
              onClick={auth.title === 'Sign Up' ? openSignUp : null}
            >
              {auth.title}
            </button>
          ))}
          <button onClick={toggleDarkMode} className="px-4 py-2 rounded-md border">
            Toggle Theme
          </button>
        </div>
      </div>
      {isSignUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <SignUpForm onSuccess={closeSignUp} />
            <button onClick={closeSignUp} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
