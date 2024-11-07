import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
    return (
        <>
            {articles.map(article => (
                <div key={article.Article_ID} className='articleCard'>
                  <h3 className='titleArticlesListPage'>{article.title}</h3>
                    <h4 className='subtitleArticlesListPage'> { article.subTitle } </h4>
                    <p> {article.content[0].substring(0,150)}... </p>
                    <Link  to={`/articles/${article.Article_ID}`}><button>Read article</button></Link>
                </div>
            ))}
        </>
    );
}

export default ArticlesList;
