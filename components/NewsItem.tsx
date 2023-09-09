import Image from 'next/image';
import React from 'react';

function NewsItem({ newsItem }:any) {
    return (
        <div className="bg-blue-50 p-4 rounded-lg shadow-lg mb-4">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 md:pr-4 mb-4 md:mb-0">
                    <div className="w-full h-40 bg-blue-200 rounded-md">
                        <Image src="/car1.png" alt="Basic photo" width={300} height={150} />
                    </div>
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-xl font-semibold text-blue-800 mb-2">{newsItem.title}</h2>
                    <p className="text-gray-600">{newsItem.author}</p>
                    <p className="text-gray-700 text-sm mt-2">{newsItem.publishedAt}</p>
                    <p className="text-gray-700 mt-4">{newsItem.description}</p>
                    <a
                        href={newsItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline mt-4 block"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
