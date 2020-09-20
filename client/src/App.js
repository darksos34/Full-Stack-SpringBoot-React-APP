import React from 'react';
import Contacts from './components/Contacts';
import './App.css';
import ContactsHooks from "./components/ContactsHook";
import AddContactsHooks from "./components/AddContactsHook";


function App() {
    return (
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper center-align">
                    <a href="/" className="brand-logo">Contacts</a>
                </div>
            </nav>
            <div className="row">
                <Contacts />
                <ContactsHooks/>
                <AddContactsHooks/>
            </div>

        </div>
    );
}

export default App;
