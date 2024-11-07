import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams(); //Getting Articles by Article ID using params function

    //fetching all articles data from article-content sources
    const article = articles.find(article => article.Article_ID == articleId);

    //checking are we able to find the article - IF not found, displying 404 Page
    if(!article){
        return <NotFoundPage />
    }

    return (
        <>
            <div className="articleID">
                <h1> { article.title } </h1>
                <h4 className='subtitle'> { article.subTitle } </h4>
                {/* Mapping all article content data */}
                {article.content.map((paragraph, i) => (
                    <p key={i}> {paragraph} </p>
                ))}
                <hr />
                <h5>Copyright - All Rights Reserved -  Abdulsatar Qaderzada</h5>
            </div>
        </>
        
    );
}


export default ArticlePage;
