// import React, { useState } from "react"; 
// import ReactDOM from "react-dom/client";
// import NavigationBar from "./components/NavigationBar";
// import UserCard from "./components/UserCard";
// import SignUpPage from "./components/SignUpPage";
// import { User } from "lucide-react";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const AppLayout = () => {
//     const [currentPage, setCurrentPage] = useState('home');

//     return (
//         <>
//             <NavigationBar 
//                 currentPage={currentPage} 
//                 setCurrentPage={setCurrentPage} 
//             />
//             <UserCard />
//             <SignUpPage/>
//         </>
//     )
// }

// root.render(<AppLayout />);
import React, { useState } from "react"; 
import ReactDOM from "react-dom/client";
import NavigationBar from "./components/NavigationBar";
import UserCard from "./components/UserCard";
import SignUpPage from "./components/SignUpPage";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
// Import your other page components here
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the current page content
    const renderPageContent = () => {
        switch(currentPage) {
            case 'home':
                return <UserCard />;
            
            case 'about':
                // Replace with your AboutPage component
                return <AboutPage />;
            
            case 'contact':
                // Replace with your ContactPage component
                return (
                    <ContactPage/>
                );
            
            case 'signup':
                return <SignUpPage />;
            
            default:
                return <UserCard />;
        }
    };

    return (
        <>
            <NavigationBar 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
            />
            {renderPageContent()}
        </>
    )
}

root.render(<AppLayout />);