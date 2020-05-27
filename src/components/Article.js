import React, {Component} from 'react'
import LikeButton from "./LikeButton"

class Article extends Component {
    render() {
        const {article} = this.props
        
        return (
            <div>
                <h2>{article.title}</h2>
                <section>{article.text}</section>
                <h3>creation date: {new Date(article.date).toDateString()}</h3>
                <LikeButton/>
            </div>
        )
    }
};

export default Article
