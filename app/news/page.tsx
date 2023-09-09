'use client'
import NewsItem from '@/components/NewsItem';
import axios from 'axios';
import { Loader } from '@/components';
import React, { useState, useEffect } from 'react'

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try {
            setLoading(true);
            const getArticles = async () => {
                const response: any = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEXT_PUBLIC_NEWS_API}&q=cars`)
                if (response.status === 200) {
                    setNews(response.data.articles)
                }
                else {
                    setNews([])
                }
            }
            getArticles();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }, [])
    return (
        <>
            {loading ? <div className="flex justify-center items-center w-full h-screen"><Loader /></div> : <>
                <div className="hero">
                    <div className="flex-1 pt-36 padding-x">
                        {news && news.length ?
                            news.map(article => <NewsItem newsItem={article} />)
                            :
                            <div className="flex justify-center items-center w-full h-screen">
                                <h2 className='text-black text-xl font-bold'>Oops, no results! Try again sometime later. Sorry for inconvinience.</h2>
                            </div>
                        }
                    </div>
                </div>
            </>}
        </>
    )
}

export default News