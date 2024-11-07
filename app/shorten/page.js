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

    // function to handle change
    const handleChange = ()=>{
        
    }

    return (
        <div>
            <h1>Generate your short URLs</h1>
            <div>
                <input type="text" 
                    className='p-4 focus:outline-blue-500 '
                    placeholder='Enter URL...'
                    value={url}
                    onChange={handleChange}
                />
                <input type="text" 
className='p-4 focus:outline-blue-500 '
                    placeholder='Enter preferred short URL'
                    value={shortUrl}
                    onChange={handleChange}
                />
                <button>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
