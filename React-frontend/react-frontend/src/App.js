import React from 'react';
import Header from './components/Header';
import ListMovie from './components/ListMovie';
import Footer from './components/Footer';

function App() {
    return (
        <div className='app-container'>
            <Header />
            <ListMovie />
            <Footer />
        </div>
    );
}

export default App;
