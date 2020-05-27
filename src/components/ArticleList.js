import React, { Component } from 'react'
import Article from './Article'

function ArticleList({articles}) {
    const articleElements = articles.map(article => 
            <li key={article.title}><Article article = {article}/></li>
    ) 
    return (
        <ul>
            {articleElements}
        </ul>
    )
};

export default ArticleList
