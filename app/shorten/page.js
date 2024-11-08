// URL SHORTENING HAPPENS HERE

// client component - because form used here
'use client'

import React from 'react'

// import hooks
import { useState } from 'react'

const Shorten = () => {

    // state for url
    const [url, setUrl] = useState("")
    // state for short url
    const [shortUrl, setShortUrl] = useState("")
    // state to show wether short url generated
    const [generated, setGenerated] = useState(false);

    return (
        <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-blue-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }} />

                <input type="text"
                    value={shortUrl}
                    className='px-4 py-2 focus:outline-blue-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setShortUrl(e.target.value) }} />
                <button className='bg-blue-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
