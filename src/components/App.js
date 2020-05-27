import React from 'react'
import Article from "./Article"
import LikeButton from './LikeButton'
import ArticleList from './ArticleList'
import articles from "../fixtures"

function App() {
    return (
        <div>
            <h1>App Name !!!</h1>
            <ArticleList articles={articles}/>
        </div>
    )
};

export default App
