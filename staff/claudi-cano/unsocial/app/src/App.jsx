import { useState } from 'react'

import { Login, Register, Posts, CreatePost } from './view'

import Header from './components/functional/Header'
import Footer from './components/functional/Footer'

import logic from './logic'

export default function App() {
    const [view, setView] = useState(logic.isUserLoggedIn() ? 'posts' : 'login')

    const handlePostCreated = () => setView('posts')

    const handleUserLoggedOut = () => this.setView('login')

    const handleUserLoggedIn = () => this.setView('posts')

    const handleRegisterClick = () => this.setView('register')

    const handleLoginClick = () => this.setView('login')

    const handleUserRegistered = () => this.setView('login')

    const handleNewPostClick = () => this.setView('new-post')

    const handleHomeClick = () => this.setView('posts')


    console.log('App -> render')

    return <>
        <Header view={view} onHomeClick={handleHomeClick} onLoggedOut={handleUserLoggedOut} />

        {view === 'login' && <Login onLoggedIn={handleUserLoggedIn} onRegisterClick={handleRegisterClick} />}

        {view === 'register' && <Register onLoginClick={handleLoginClick} onRegistered={handleUserRegistered} />}

        {view === 'posts' && <Posts />}

        {view === 'new-post' && <CreatePost onCreated={handlePostCreated} />}

        <Footer onNewPostClick={handleNewPostClick} view={view} />
    </>
}