import React from 'react';
import Navbar from './components/Navbar';
import ArtGallery from './components/ArtGallery';
import Music from './components/Music';
import Blog from './components/Blog';
import VisitorCounter from './components/VisitorCounter';
import Footer from './components/Footer';
// import Profile  from './components/Profile';

import './components/global.css';
import './components/navbar.css';
import './components/music.css';
import './components/modal.css';
import './components/artGallery.css';
import './components/blog.css';

function App() {
    return (
        <div>
            <Navbar />
            
            <section id="art">
                <h2 className="section-title">Art</h2>
                <ArtGallery />
            </section>
            
            <section id="music">
                <h2 className="section-title">Music</h2>
                <Music />
            </section>
            
            <section id="blog">
                <h2 className="section-title">Blog</h2>
                <Blog />
            </section>
            
            <footer>
                <VisitorCounter />
                <Footer />

            </footer>
            
        </div>
    );
}

export default App;
