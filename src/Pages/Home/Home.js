import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';


const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            <h2>Total news: {AllNews.length}</h2>
            <div>
                {
                    AllNews.map((news, index) => <NewsCard
                        key={index}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;