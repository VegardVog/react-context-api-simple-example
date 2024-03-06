import { useState } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'
import { createContext } from 'react';

const APP_NAME = 'Next-gen Social Media'
const Context = createContext();

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])


    return (
        <>
            <Context.Provider value={{posts : posts, setPosts : setPosts, appName: APP_NAME}}>
                <Header />
                <CreatePost />
                <Posts  />
            </Context.Provider>
        </>
    )
}

export { App , Context}
