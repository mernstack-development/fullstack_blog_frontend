import React from 'react';
import ArticlesList from '../components/ArticlesList'
import '../App.css';
import articles from './article-content';


const ArticlesListPage = () => {
    return (
        <>
        <h1 className='Header'>Articles</h1>
            <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;
