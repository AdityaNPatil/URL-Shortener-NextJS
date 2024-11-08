// ShortUrlList.js
import Link from 'next/link';
import React from 'react';

const ShortUrlList = ({ allShortUrls }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold text-blue-700 mb-3">Your Generated Short Links</h2>
            <div className="flex flex-col gap-3">
                {allShortUrls.map((doc, idx) => (
                    <Link key={idx} href={doc.url} target="_blank" rel="noopener noreferrer">
                        <div className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md cursor-pointer shadow-sm transition duration-300 ease-in-out">
                            <p className="text-blue-600 font-medium underline">{doc.shortUrl}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShortUrlList;
